import { useEffect, useState, useRef } from 'react';
import axios from 'axios';


function useCheckAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const didRun = useRef(false); // To prevent multiple invocations


  async function checkAuthentication() {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/authentication/check_user_authentication`, {withCredentials : true});
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      if (error.response?.status === 403) {
        setIsAuthenticated(false);
      }
      console.error("checkAuthentication error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined' || didRun.current) return;
    
    // Define a function to be called when the page is fully loaded and cookies are available.
    const onLoad = () => {
      // Optionally, you can check for a specific cookie here:
      // if(document.cookie.includes("myCookieName=")) { ... }
      checkAuthentication();
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }

    didRun.current = true;
  }, []);

  return { 
    isAuthenticated, 
    loading 
  };
}

export default useCheckAuthentication;

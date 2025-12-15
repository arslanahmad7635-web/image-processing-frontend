import React from 'react'

function Feedback() {
  return (
   
    <section className="h-screen bg-gray-50 flex items-center justify-center ">
      <div className="w-3/5 bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        
        <div className="bg-gradient-to-br from-blue-400 to-primary text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-indigo-100 mb-6">
            We'd love to hear from you.Feel free to contact us anytime and share your queries.
          </p>
          <div className="leading-8 text-sm">
            <p><span className="font-semibold">Email:</span> support@example.com</p>
            <p><span className="font-semibold">Phone:</span> +92 000 3342 </p>
            <p><span className="font-semibold">Address:</span> Pakistan</p>
          </div>
        </div>

        
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Rizwan"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Rizwan@gmail.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

            
        





export default Feedback
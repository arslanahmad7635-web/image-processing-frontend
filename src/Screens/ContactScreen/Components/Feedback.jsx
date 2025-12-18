import React from 'react'

function Feedback() {
  return (
   
    <section className="h-screen bg-gray-50 flex items-center justify-center font-poppins">
      <div className="w-6/10 bg-white rounded-2xl overflow-hidden flex flex-col">
        
        <div className="text-white p-8 flex flex-col justify-center flex flex-col items-center justify-center">
          <h2 className="text-3xl text-black font-bold mb-4">Contact Us</h2>
          <p className="mb-6 text-black">
            We'd love to hear from you.Feel free to contact us anytime and share your queries.
          </p>
        </div>

        
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6"></h3>
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
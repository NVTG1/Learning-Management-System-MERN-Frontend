import React from 'react'
import { assets } from '../../assets/assets'

function Companies() {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      
      {/* Heading */}
      <p className="text-gray-600 text-lg md:text-xl font-medium mb-6">
        Trusted by learners from
      </p>

      {/* Logos */}
      <div className="flex items-center gap-10 md:gap-16 flex-wrap justify-center">
        <img 
          src={assets.microsoft_logo} 
          alt="Microsoft" 
          className="w-28 opacity-70 hover:opacity-100 transition duration-300"
        />
        <img 
          src={assets.adobe_logo} 
          alt="Adobe" 
          className="w-24 opacity-70 hover:opacity-100 transition duration-300"
        />
        <img 
          src={assets.google_logo} 
          alt="Google" 
          className="w-28 opacity-70 hover:opacity-100 transition duration-300"
        />
        <img 
          src={assets.walmart_logo} 
          alt="Walmart" 
          className="w-28 opacity-70 hover:opacity-100 transition duration-300"
        />
      </div>
    </div>
  )
}

export default Companies

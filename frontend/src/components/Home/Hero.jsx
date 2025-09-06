import React from 'react'

const Hero = () => {
  return (
    <div className="w-full bg-white max-w-7xl mx-auto px-6 py-20 flex items-center justify-between flex-wrap gap-2">
        
        <div className="w-1/2 max-w-7xl mx-auto">
            <h1 className='text-4xl font-bold'>Sit and shop, we got you!</h1><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
            <button className="px-4 py-1 bg-blue-900 text-white rounded-md text-sm hover:bg-blue-800 transition">
              SHOP NOW
            </button>
        </div>

        <div className="w-100 bg-black max-w-7xl mx-auto h-100"></div>
    </div>
  )
}

export default Hero
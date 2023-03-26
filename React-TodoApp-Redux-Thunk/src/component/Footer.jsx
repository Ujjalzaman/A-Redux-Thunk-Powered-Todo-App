import React from 'react'

const Footer = () => {
  
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p> left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className="cursor-pointer font-bold">All</li>
                <li>|</li>
                <li className="cursor-pointer font-bold">Incomplete</li>
                <li>|</li>
                <li  className="cursor-pointer font-bold">Complete</li>
                
                <li
                    className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
                   
                ></li>
                <li
                    className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer bg-red-500"
                    
                ></li>
                <li
                    className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer bg-yellow-500"
                    
                ></li>
            </ul>
        </div>
    )
}

export default Footer
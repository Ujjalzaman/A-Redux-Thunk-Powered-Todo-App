import React, { useState } from 'react'
import plusImg from '../assets/images/plus.png';
import notesImg from '../assets/images/notes.png';
const Header = () => {
    return (
        <div>
            <form 
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img
                    src={notesImg}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    value=""
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className="appearance-none w-8 h-8 bg-[url(`${plusImg}`)] bg-no-repeat bg-contain"
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li 
                className="flex space-x-1 cursor-pointer"
                >
                    <img
                        className="w-4 h-4"
                        src={plusImg}
                        alt="Complete"
                    />
                    <span >Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" >Clear completed</li>
            </ul>
        </div>
    )
}

export default Header
import React from 'react'
import { useDispatch } from 'react-redux';
import cancelImg from '../assets/images/cancel.png'
import { colorAdded, deleteTodo, toggledTodo } from '../redux/todo/action';
import deleteTodosMiddleare from '../redux/todo/thunk/deleteTodosMiddleware';
import colorChangeMiddlware from '../redux/todo/thunk/colorChangeMidleware';
import updateStatusMiddleware from '../redux/todo/thunk/updateStatusMiddleware';

const Todo = ({item}) => {
    const  {id, completed, text, color} = item;
    const dispatch = useDispatch();
    const handleToggled = (id) =>{
        dispatch(updateStatusMiddleware(id, completed))
    }
    const handledelete = (id) =>{
        dispatch(deleteTodosMiddleare(id))
    }
    const handleColorChange = (id, color) =>{
        dispatch(colorChangeMiddlware(id, color))
    }
    return (
        <div
            className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
        >
            <div
                className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
            >
                <input
                    type="checkbox"
                    className="opacity-0 absolute rounded-full"
                    onChange={() => handleToggled(id)}
                    checked= {completed}
                />
                    {completed && 
                    <svg
                    className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
                    }
            </div>

            <div className={`select-none flex-1 ${completed && 'line-through'}`}>
               {text}
            </div>

            <div
                className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"
                onClick={()=> handleColorChange(id, 'green')}
            ></div>

            <div
                className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 bg-yellow-500"
               onClick={()=> handleColorChange(id, 'yellow')}
            ></div>

            <div
                className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 bg-red-500"
                onClick={()=> handleColorChange(id, 'red')}
            ></div>

            <img
                src={cancelImg}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={() => handledelete(id)}
            />
        </div>
    )
}

export default Todo
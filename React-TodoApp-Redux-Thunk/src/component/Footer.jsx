import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor, changeStatus } from '../redux/filter/action'

const remainingText = (number) =>{
    switch (number) {
        case 0:
            return 'No Task Remaining'
        case 1:
            return '1 Task Remaining'
    
        default:
            return `${number} Task Remaining`;
    }
}


const Footer = () => {
    const todos = useSelector((state) => state.todo);
    const filter = useSelector((state) => state.filter);
    const remaingingTodosNumber = todos.filter((todo) => !todo.completed).length;
    const dispatch = useDispatch();
    const handleChiangeStatus = (text) =>{
        dispatch(changeStatus(text));
    }

    const handleChangeByColor = (color) =>{
        if(filter.color.includes(color)){
            dispatch(changeColor(color, 'REMOVE'));
        }
        else{
            dispatch(changeColor(color, 'ADDED'))
        }
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{remainingText(remaingingTodosNumber)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className="cursor-pointer font-bold" onClick={() => handleChiangeStatus('ALL')}>All</li>
                <li>|</li>
                <li className="cursor-pointer font-bold" onClick={() => handleChiangeStatus('INCOMPLETE')}>Incomplete</li>
                <li>|</li>
                <li  className="cursor-pointer font-bold" onClick={() => handleChiangeStatus('COMPLETE')}>Complete</li>
                
                <li
                    className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
                   onClick={() => handleChangeByColor('green')}
                ></li>
                <li
                    className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer bg-red-500"
                    onClick={() => handleChangeByColor('red')}
                ></li>
                <li
                    className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer bg-yellow-500"
                    onClick={() => handleChangeByColor('yellow')}
                ></li>
            </ul>
        </div>
    )
}

export default Footer
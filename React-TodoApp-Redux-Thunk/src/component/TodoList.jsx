import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import fetchTdosoMiddleware from "../redux/todo/thunk/addTodos";

export default function TodoList() {
    const todos = useSelector((state) => state.todo);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchTdosoMiddleware)
    }, [dispatch])

    const filterBYStatus = (item) =>{
        const {status} = filter;
        switch (status) {
            case 'COMPLETE':
                return item.completed;
            case 'INCOMPLETE':
                return !item.completed;
            default:
                return true;
        }
    }
    const filterBYColor =(todo) =>{
        const {color} = filter;
        if(color.length > 0){
            return color.includes(todo.color)
        }
        return todo;
    } 
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
            .filter(filterBYStatus)
            .filter(filterBYColor)
            .map((item) =>(
                <Todo key={item.id} item={item}/>
            ))}
        </div>
    );
}

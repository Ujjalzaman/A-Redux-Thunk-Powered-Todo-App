import { toggledTodo } from "../action";

const updateStatusMiddleware = (todoId, currentStatus) =>{
    return async(dispatch) =>{
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: !currentStatus,
            }),
            headers: {"Content-type": "application/json; charset=UTF-8",}
        });
        const todos = await response.json();
        dispatch(toggledTodo(todos.id));
    }
}
export default updateStatusMiddleware;
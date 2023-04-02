import { deleteTodo } from "../action";

const deleteTodosMiddleare = (todoId) =>{
    return async(dispatch) =>{
        await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'DELETE',
        });
        dispatch(deleteTodo(todoId));
    }
}
export default deleteTodosMiddleare;
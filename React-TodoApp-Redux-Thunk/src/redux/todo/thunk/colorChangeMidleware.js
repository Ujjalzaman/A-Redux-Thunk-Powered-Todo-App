import { colorAdded } from "../action";

const colorChangeMiddlware = (todoId, color) =>{
    return async(dispatch) =>{
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                color: color,
            }),
            headers: {"Content-type": "application/json; charset=UTF-8",}
        });
        const todos = await response.json();
        dispatch(colorAdded(todos.color, todos.id));
    }
}
export default colorChangeMiddlware;
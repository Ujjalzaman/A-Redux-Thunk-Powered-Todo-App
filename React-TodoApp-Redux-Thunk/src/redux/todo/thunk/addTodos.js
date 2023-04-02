import { loadedData } from "../action";

const fetchTdosoMiddleware = async(dispatch) =>{
    const response = await fetch('http://localhost:9000/todos');
    const todos = await response.json();
    dispatch(loadedData(todos))
}
export default fetchTdosoMiddleware;
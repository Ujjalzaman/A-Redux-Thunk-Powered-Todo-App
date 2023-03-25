//thunk concept - getting middleware code here

const { default: fetch } = require("node-fetch");

const fetchTodos = async(dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const todos = await response.json();
    dispatch({
        type: 'todo/todoLoaded',
        payload: todos
    })
    console.log(`geeting data is: ${getState().todos.length}`)
}

module.exports = {
    fetchTodos
}
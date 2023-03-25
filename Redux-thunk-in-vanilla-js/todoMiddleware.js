const { default: fetch } = require("node-fetch");

const delayMiddleware = (store) => (next) => (action) =>{
    if(action.type === 'todo/todoAdded'){
        console.log('i m delaying to you');

        setTimeout(() => {
            next(action)
        }, 2000);
        return ;
    }
    return next(action)
}
// const fetchMiddlewares = (store) => (next) => async(action) => {
//     if(action.type === 'todo/fetchTodo'){
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//         const todos = await response.json();
//         store.dispatch({
//             type: 'todo/todoLoaded',
//             payload: todos
//         })
//         console.log(`geeting data is: ${store.getState().todos.length}`)
//         return ;
//     }
//     return next(action)
// }


// thunk concept ---> thunk middleware
const fetchMiddlewares = (store) => (next) => async(action) => {
    if(typeof action === 'function'){
        return action(store.dispatch, store.getState)
    }
    return next(action)
}


module.exports = {
    delayMiddleware,
    fetchMiddlewares
}
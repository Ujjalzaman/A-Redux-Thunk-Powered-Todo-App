
const {delayMiddleware,fetchMiddlewares } = require('./todoMiddleware');
const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require('./utilityMiddlware');
// initialState
const initialState = {
    todos : [],
}

// reducer 
const todoReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'todo/todoAdded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload
                    }
                ]
            }
        case 'todo/todoLoaded':
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            }
    
        default:
            state;
    }
}

// store
const store = createStore(todoReducer, applyMiddleware(delayMiddleware,fetchMiddlewares));

// subscribe
store.subscribe(() =>{
    console.log(store.getState())
})

// action to subscribe
store.dispatch({
    type: 'todo/todoAdded',
    payload: 'Adding someting speacial'
})

// store.dispatch({
//     type: 'todo/fetchTodo',
//     payload: 'Adding someting speacial'
// })
// thunk concept ===> thunk action dispatch
store.dispatch(fetchTodos)
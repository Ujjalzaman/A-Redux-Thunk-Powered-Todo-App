import { TODOADDED,TODODELETED,TODOCOLORADDED, TODOTOGGLED,TODOCOMPLETEALL, TODOCOMPLETECLEAR } from "./actionType"
import initialState from './initalState';

const genLastNumber = (todos) =>{
    const max = todos.reduce((acc, cur) => Math.max(cur.id, acc), -1);
    return max +1;
}

const todoReducer = (state=initialState, action) =>{
    switch (action.type) {
        case TODOADDED:
            return [
                ...state, 
                {
                    id: genLastNumber(state),
                    title: action.payload,
                    completed : false,
                }
            ]
        case TODODELETED:
            return state.filter((todo) => todo.id !== action.payload)
        
        case TODOTOGGLED:
            return state.map((todo) => {
                if(todo.id !== action.payload){
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case TODOCOLORADDED:
            const {id, color} = action.payload;
            return state.map((todo) =>{
                if(todo.id !== id){
                    return todo
                }
                return {
                    ...todo,
                    color: color
                }
            })
        case TODOCOMPLETEALL: 
            return state.map((todo) =>{
                return {
                    ...todo,
                    completed : true
                }
            })
        case TODOCOMPLETECLEAR:
            return state.filter((todo) => !todo.completed)

        default:
            return state;
    }
}
export default todoReducer;
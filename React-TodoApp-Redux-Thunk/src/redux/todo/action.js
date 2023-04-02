import { TODOADDED,TODODELETED,TODOCOLORADDED, TODOTOGGLED,TODOCOMPLETEALL, TODOCOMPLETECLEAR, FETCHTODOS } from "./actionType"

export const loadedData = (todos) =>{
    return {
        type: FETCHTODOS,
        payload: todos
    }
}

export const add = (text) =>{
    return {
        type: TODOADDED,
        payload: text
    }
} 

export const deleteTodo = (todoId) =>{
    return {
        type: TODODELETED,
        payload: todoId
    }
}

export const colorAdded = (todoId, color) =>{
    return {
        type: TODOCOLORADDED,
        payload: {todoId, color}
    }
} 
export const toggledTodo = (todoId) =>{
    return {
        type: TODOTOGGLED,
        payload: todoId
    }
} 

export const completeAll = () =>{
    return {
        type: TODOCOMPLETEALL
    }
} 

export const clearcomplete = () =>{
    return {
        type: TODOCOMPLETECLEAR
    }
} 
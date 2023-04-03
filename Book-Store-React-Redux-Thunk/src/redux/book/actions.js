import { ADDBOOK, DELETEBOOK, EDITBOOK } from "./actionType"

export const addedBook = (book) =>{
    return {
        type: ADDBOOK,
        payload: book
    }
}

export const deleteBook = (id) =>{
    return {
        type: DELETEBOOK,
        payload: id
    }
}

export const editBook = (id, book) =>{
    return {
        type: EDITBOOK,
        payload: {
            id, book
        }
    }
}
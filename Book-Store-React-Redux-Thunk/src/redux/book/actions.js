import { ADDBOOK, DELETEBOOK, EDITBOOK, UPDATEBOOK } from "./actionType"

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

export const updateBook = (id, book) =>{
    return {
        type: UPDATEBOOK,
        payload: {
            id, book
        }
    }
}
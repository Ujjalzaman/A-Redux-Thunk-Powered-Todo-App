import { ADDBOOK, DELETEBOOK, EDITBOOK, FETCHBOOK, UPDATEBOOK } from "./actionType"

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

export const fetchBook = (books) =>{
    return {
        type: FETCHBOOK,
        payload: books
    }
}
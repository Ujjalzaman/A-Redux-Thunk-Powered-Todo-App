import { BOOKFILTER, BOOKSEARCH } from "./actionType"

export const bookFilter = (status) =>{
    return {
        type: BOOKFILTER,
        payload: status
    }
}

export const bookSearch = (searchInput) =>{
    return {
        type: BOOKSEARCH,
        payload: searchInput
    }
}
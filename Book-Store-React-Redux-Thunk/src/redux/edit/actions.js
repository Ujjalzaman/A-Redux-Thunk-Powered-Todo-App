import { BOOKEDIT, REMOVEEDIT } from "./actionType"

export const bookEdit = (bookId) =>{
    return {
        type: BOOKEDIT,
        payload: bookId
    }
}
export const removeEdit = () =>{
    return {
        type : REMOVEEDIT
    }
}
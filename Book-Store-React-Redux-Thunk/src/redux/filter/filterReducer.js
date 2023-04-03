import { BOOKFILTER, BOOKSEARCH } from "./actionType";

const initalState = {
    status: 'All'
}

const filterReducer = (state= initalState, action) =>{
    switch (action.type) {
        case BOOKFILTER:
            return {
                ...state,
                status: action.payload
            } 
        case BOOKSEARCH:
            return {
                ...state,
                search: action.payload
            }   
        default:
            return state;
    }
}
export default filterReducer;
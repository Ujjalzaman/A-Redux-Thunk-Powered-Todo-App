import bookReducer from "./book/bookReducer";
import {combineReducers} from 'redux';
import editReducer from "./edit/editReducer";

const rootReducer = combineReducers({
    books: bookReducer,
    edit: editReducer
})

export default rootReducer;
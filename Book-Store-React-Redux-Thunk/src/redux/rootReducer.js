import bookReducer from "./book/bookReducer";
import {combineReducers} from 'redux';
import editReducer from "./edit/editReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
    books: bookReducer,
    edit: editReducer,
    filter: filterReducer
})

export default rootReducer;
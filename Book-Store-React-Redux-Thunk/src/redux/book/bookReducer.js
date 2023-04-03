import { ADDBOOK, DELETEBOOK, FETCHBOOK, UPDATEBOOK } from "./actionType";
import initalState from "./initialState";

const genNextId = (book) => {
    const genId = book.reduce((acc, cur) => Math.max(cur.id, acc), -1);
    return genId + 1
}
const bookReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCHBOOK:
            return [...state, ...action.payload]
            
        case ADDBOOK:
            const { name, author, thumbnail, price, rating, featured } = action.payload;
            return [
                ...state,
                {
                    id: genNextId(state),
                    name, author, thumbnail, price, rating, featured
                }
            ];
        case DELETEBOOK:
            return state.filter((item) => item.id !== action.payload);

        case UPDATEBOOK:
            const { bookName, bookAuthor, bookthumbnail, bookprice, bookrating, bookfeatured } = action.payload.book;
            return state.map((book) =>{
                if(book.id == action.payload.id){
                    return book;
                } 
                return {
                    ...book,
                    bookName, bookAuthor, bookthumbnail, bookprice, bookrating, bookfeatured
                }
            })

        default:
            return state;
    }
}

export default bookReducer;
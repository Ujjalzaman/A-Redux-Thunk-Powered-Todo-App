import { ADDBOOK, DELETEBOOK } from "./actionType";
import initalState from "./initialState";

const genNextId = (book) => {
    const genId = book.reduce((acc, cur) => Math.max(cur.id, acc), -1);
    return genId + 1
}
const bookReducer = (state = initalState, action) => {
    switch (action.type) {
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

        default:
            return state;
    }
}

export default bookReducer;
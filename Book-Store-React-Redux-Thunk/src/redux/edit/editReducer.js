import { BOOKEDIT, REMOVEEDIT } from "./actionType";

const intialState = {
    // id: ''
}
const editReducer = (state=intialState, action) =>{
    switch (action.type) {
        case BOOKEDIT:
            return {
                ...state,
                id: action.payload
            }
        case REMOVEEDIT: {
            return {}
        }
        default:
            return state;
    }
}

export default editReducer;
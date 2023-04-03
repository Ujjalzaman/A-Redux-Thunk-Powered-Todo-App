import initalState from "./initialState";

const bookReducer = (state= initalState, action) =>{
    switch (action.type) {
        case "some":
            return state;
        default:
            return state;
    }
}

export default bookReducer;
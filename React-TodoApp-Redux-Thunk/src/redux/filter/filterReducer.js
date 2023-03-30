import { FILTERBYCOLOR, FILTERBYSTATUS } from "./actionType";

const initalState = {
    color: [],
    status: 'ALL'
}

const filterReducer = (state=initalState, action) =>{
    switch (action.type) {
        case FILTERBYSTATUS:
            return {
                ...state,
                status: action.payload
            };
        case FILTERBYCOLOR:
            const {color, type} = action.payload;
            switch (type) {
                case "ADDED":
                    return {
                        ...state,
                        color: [...state.color, color]
                    }
                case "REMOVE": 
                    return {
                        ...state,
                        color: state.color.filter(exist => exist !== color)
                    }
            
                default:
                    return state;
            }
            return state;
    
        default:
            return state;
    }
}
export default filterReducer;
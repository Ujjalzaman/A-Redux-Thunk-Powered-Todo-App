import { FILTERBYCOLOR, FILTERBYSTATUS } from "./actionType"

export const changeStatus = (text) =>{
    return {
        type: FILTERBYSTATUS,
        payload: text
    }
}

export const changeColor = (color, type) =>{
    return {
        type: FILTERBYCOLOR,
        payload: {color, type}
    }
}
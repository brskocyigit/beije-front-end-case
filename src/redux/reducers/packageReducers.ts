import { Action } from "../actions/types"


export const normalPackageReducer = (state={standard:0,super:0,superplus:0},action:Action) => {
    switch (action.type) {
        case "standard":
            return{
                ...state,
                standard: parseFloat((2.973 * action.payload).toString().substring(0,5)),
                amountStandard:action.payload
            }
        case "super":
            return{
                ...state,
                super: parseFloat((3.327 * action.payload).toString().substring(0,5)),
                amountSuper:action.payload
            }
        case "superplus":
            return{
                ...state,
                superplus: parseFloat((3.748 * action.payload).toString().substring(0,5)),
                amountSuperPlus:action.payload
            }
    
        default:
            return state;
    }
}

export const dailyPackageReducer = (state={daily:0,superDaily:0},action:Action) => {
    switch (action.type) {
        case "daily":
            return {
                ...state,
                daily: parseFloat((1.972 * action.payload).toString().substring(0,5)),
                amountDaily:action.payload
            }
            
        case "superdaily":
            return {
                ...state,
                superDaily: parseFloat((2.092 * action.payload).toString().substring(0,5)),
                amountSuperDaily:action.payload
            }
        default:
            return state;
    }
}

export const tamponPackageReducer = (state={mini:0,standardTampon:0},action:Action) => {
    switch (action.type) {
        case "mini":
            return{
                ...state,
                mini: parseFloat((3.373 * action.payload).toString().substring(0,5)),
                amountMini:action.payload
            }
        case "standardtampon":
            return{
                ...state,
                standardTampon: parseFloat((3.701 * action.payload).toString().substring(0,5)),
                amountStandard:action.payload
            }
    
        default:
            return state;
    }
}
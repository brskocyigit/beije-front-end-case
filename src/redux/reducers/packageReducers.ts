import { Action } from "../actions/types"
import { ActionType } from "../action-types/actionTypes"


export const normalPackageReducer = (state={standard:0,super:0,superplus:0},action:Action) => {
    switch (action.type) {
        case ActionType.STANDARD_PED:
            return{
                ...state,
                standard: parseFloat((2.973 * action.payload).toString().substring(0,5)),
                amountStandard:action.payload
            }
        case ActionType.SUPER_PED:
            return{
                ...state,
                super: parseFloat((3.327 * action.payload).toString().substring(0,5)),
                amountSuper:action.payload
            }
        case ActionType.SUPER_PLUS_PED:
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
        case ActionType.DAILY_PED:
            return {
                ...state,
                daily: parseFloat((1.972 * action.payload).toString().substring(0,5)),
                amountDaily:action.payload
            }
            
        case ActionType.SUPER_DAILY_PED:
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
        case ActionType.MINI_TAMPON_PED:
            return{
                ...state,
                mini: parseFloat((3.373 * action.payload).toString().substring(0,5)),
                amountMini:action.payload
            }
        case ActionType.STANDARD_TAMPON_PED:
            return{
                ...state,
                standardTampon: parseFloat((3.701 * action.payload).toString().substring(0,5)),
                amountStandard:action.payload
            }
    
        default:
            return state;
    }
}
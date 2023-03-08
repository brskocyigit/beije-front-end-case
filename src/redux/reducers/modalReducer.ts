import { Action } from "../actions/types";
import { ActionType } from "../action-types/actionTypes";

export const modalReducer = (state={modal:false},action:Action) => {
    switch (action.type) {
        case ActionType.MODAL:
            return {
                modal:action.payload
            }
        default:
            return state;
    }
}
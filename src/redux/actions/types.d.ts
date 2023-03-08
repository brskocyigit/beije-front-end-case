import { ActionType } from "../action-types/actionTypes"


interface ModalAction {
    type:ActionType.MODAL,
    payload:boolean
}

export type Action = ModalAction
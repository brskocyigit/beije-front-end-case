import { ActionType } from "../action-types/actionTypes"


interface ModalAction {
    type:ActionType.MODAL,
    payload:boolean
}

interface PackageAction{
    type:"standard" | "super" | "superplus" | "daily" | "superdaily" | "mini" | "standardtampon",
    payload:number
}

export type Action = ModalAction | PackageAction

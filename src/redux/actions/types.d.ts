import { ActionType } from "../action-types/actionTypes"

//Açılır kapanır menü için kullandığım modalın tip kontrolü
interface ModalAction {
    type:ActionType.MODAL,
    payload:boolean
}

//Paketler için kullandığım tip kontrolü.
interface PackageAction{
    type:"standard" | "super" | "superplus" | "daily" | "superdaily" | "mini" | "standardtampon",
    payload:number
}

export type Action = ModalAction | PackageAction

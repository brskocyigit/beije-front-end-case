interface IModal{
    modal:boolean
}

type ModalState = {
    modal:IModal
}

type ModalAction = {
    type:string,
    modal:IModal
}

export type Normal = {
    standard: number
    super: number
    superplus: number
    amountStandard?: number
    amountSuper?: number
    amountSuperPlus?: number
}

export type Daily = {
    daily: number
    superDaily: number
    amountDaily?: number
    amountSuperDaily?:number
}

export type Tampon = {
    mini: number
    standardTampon: number
    amountMini?: number
    amountStandard?:number
}

type DispatchType = (args:ModalAction) => ModalAction
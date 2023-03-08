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

type DispatchType = (args:ModalAction) => ModalAction
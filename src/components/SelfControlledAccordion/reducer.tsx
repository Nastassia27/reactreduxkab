
export type ActionType={
    type: string,

}
export const TOGGLE_CONSTANT='TOGGLE-COLLAPSED'
export const reducer= (state: boolean, action: ActionType)=>{
    //debugger
    switch (action.type){
        case TOGGLE_CONSTANT:
            return !state;
        default:
            return state
    }
}
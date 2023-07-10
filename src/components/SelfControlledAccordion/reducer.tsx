
export type ActionType={
    type: string,

}
type StateType={
    collapsed: boolean
}
export const TOGGLE_CONSTANT='TOGGLE-COLLAPSED'
export const reducer= (state: StateType, action: ActionType): StateType=>{
    //debugger
    switch (action.type){
        case TOGGLE_CONSTANT:
            state.collapsed= !state.collapsed
            return state;
        default:
            return state
    }
}
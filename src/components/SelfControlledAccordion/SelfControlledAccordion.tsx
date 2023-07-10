import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}
/*type ActionType={
    type: string,

}
const TOGGLE_CONSTANT='TOGGLE-COLLAPSED'
const reducer= (state: boolean, action: ActionType)=>{
    //debugger
    switch (action.type){
        case TOGGLE_CONSTANT:
            return !state;
        default:
            return state
    }
}*/


export function UncontrolledAccordion (props: UncontrolledAccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)



        return <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}}/>

            {!collapsed && <AccordionBody/>}

        </div>

    }


type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    /*debugger*/
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {


    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

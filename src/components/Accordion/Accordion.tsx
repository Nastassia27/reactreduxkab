import React from "react";


type ItemType={
    title: string,
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    /**
     * Element collapse story if it's true and closes when false
     */
    value: boolean
    onChange: (value:boolean )=>void
    items: ItemType[]
    onClick: (value:any)=> void
}


export function Accordion (props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} value={props.value} />
            {!props.value ? <AccordionBody items={props.items} onClick={props.onClick}/>: ''}
        </div>

}


type AccordionTitlePropsType = {
    title: string
    onChange: (value:boolean)=>void
    value: boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {
    /*debugger*/
    return (
        <div>
        <h3 onClick={()=>{props.onChange(!props.value)}}>{props.title}</h3>

    </div>
)
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any)=> void

}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index)=><li onClick={()=>{props.onClick(i.value)}}key={index}>{i.title}</li> )}
        </ul>
    )
}


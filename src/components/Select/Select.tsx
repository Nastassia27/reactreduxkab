import React from "react";

type ItemType={
    title: string,
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any)=> void
    items: ItemType[]
}
export function Select(props: SelectPropsType) {
    //debugger
    return(
        <div>
            <input type={<select name="" id=""></select>}/>
           {/*<div>{props.items.filter(el=> el.value===props.value)}</div>*/}
            {props.items.map(i=> <div>{i.title}</div>)}
        </div>
    )

}
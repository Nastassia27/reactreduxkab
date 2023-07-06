import React, {useState} from "react";
import {UncontrolledOnOff} from './UncontrolledOnOff'


export default{
    title: 'SCOnOff stories',
    component: UncontrolledOnOff,
};

export const CollapsedMode = ()=> <UncontrolledOnOff onChange={x=>x}/>
export const DefaultInputValue = ()=> <input defaultValue={'yo'} />


/*
export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <Accordion titleValue={'Menu'} value={value} onChange={setValue}/>

}*/

import React, {useState} from "react";
import {UncontrolledRating} from './UncontrolledRating'


export default{
    title: 'UncRating stories',
    component: UncontrolledRating,
};

export const CollapsedMode = ()=> <UncontrolledRating />


/*
export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <Accordion titleValue={'Menu'} value={value} onChange={setValue}/>

}*/

import React, {useState} from "react";
//import {checkActionsLoaded} from "@storybook/addon-interactions/dist/preset/checkActionsLoaded";
import {UncontrolledAccordion} from './SelfControlledAccordion'


export default{
    title: 'SCAccordion stories',
    component: UncontrolledAccordion,
};

//const callback=action('accordion mode change event fired')
export const CollapsedMode = ()=> <UncontrolledAccordion titleValue={'menu'}/>


/*
export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <Accordion titleValue={'Menu'} value={value} onChange={setValue}/>

}*/

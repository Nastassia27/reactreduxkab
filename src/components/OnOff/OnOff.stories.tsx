import React, {useState} from "react";

import {OnOff} from "./OnOff";
import {Rating, RatingValueType} from "../Rating/Rating";


export default{
    title: 'OnOff stories',
    component: OnOff,
};

export const OnMode = ()=> <OnOff value={true} onClick={x=>x}/>
export const OffMode = ()=> <OnOff value={false} onClick={x=>x}/>

export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <OnOff onClick={setValue} value={value}/>



}
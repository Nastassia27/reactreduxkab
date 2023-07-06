import React, {useState} from "react";
import {Select} from "./Select";
import {Story} from "@storybook/react";



export default{
    title: 'Select stories',
    component: Select,
};
export const SelectMode = ()=> {}

export const SelectChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);


}
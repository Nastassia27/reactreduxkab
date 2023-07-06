import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import action from '@storybook/addon-actions'


export default{
    title: 'Accordion stories',
    component: Accordion,
};


const Template: Story<AccordionPropsType> = (args)=><Accordion {...args}/>


export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args={
    titleValue:'Menu',
    value: true,
    onChange: x=>x,
    items:[],
    onClick:y=>y

}


export const UncollapsedMode = ()=> <Accordion titleValue={'List'} onChange={x=>x} value={false} items={[{title:'nastya', value:1} ,{title:'vania', value:2}]} onClick={y=>y }/>

export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <Accordion onClick={(id)=>{alert(`Hello ${id} be happy`)} } titleValue={'Menu'} value={value} onChange={setValue} items={[{title:'nastya', value:1} ,{title:'vania', value:2}]}/>



}
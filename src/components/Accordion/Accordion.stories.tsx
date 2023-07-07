import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from '@storybook/addon-actions'


export default{
    title: 'Main/Accordion stories',
    component: Accordion,
    tags: ['autodocs'],
};

const callback=action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')


const Template: Story<AccordionPropsType> = (args)=><Accordion {...args}/>


export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args={
    titleValue:'Menu',
    value: true,
    onChange: callback,
    items:[],
    onClick:onClickCallback

}


export const UncollapsedMode = ()=> <Accordion titleValue={'List'} onChange={callback} value={false} items={[{title:'nastya', value:1} ,{title:'vania', value:2}]} onClick={onClickCallback}/>

export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <Accordion onClick={(id)=>{alert(`Hello ${id} be happy`)} } titleValue={'Menu'} value={value} onChange={setValue} items={[{title:'nastya', value:1} ,{title:'vania', value:2}]}/>



}
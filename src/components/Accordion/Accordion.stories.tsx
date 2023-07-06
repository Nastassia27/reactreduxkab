import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import action from '@storybook/addon-actions'


export default{
    title: 'Accordion stories',
    component: Accordion,
};

const Template: Story<AccordionPropsType> = (args)=><Accordion {...args}/>

const xallbackProps={
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args={
    titleValue:'Menu',
    value: true,

    items:[],
    onClick:y=>y,
    onChange: x=>x

}

export const UserUncollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args={
    titleValue:'Users',
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
/*import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from '@storybook/addon-actions'

const items = [
    { title: "First item", value: 1 },
    { title: "Second item", value: 2 },
    { title: "Third item", value: 3 },
];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Accordion> = {
    title: 'New Version/Accordion',
    component: Accordion,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        titleValue: 'Menu',
        value: false,
        onChange: action('Change accordion mode'),
        items: [
            { title: "First item", value: 1 },
            { title: "Second item", value: 2 },
            { title: "Third item", value: 3 },
        ],
        onClick: action('Change accordion on click it'),
    },
}


export default meta;
type Story = StoryObj<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const MainAccordion: Story = {};
export const SecondAccordion: Story = {};*/

/*export const Secondary: Story = {
    args: {
        titleValue: 'User',
        value: false,
    },
};*/



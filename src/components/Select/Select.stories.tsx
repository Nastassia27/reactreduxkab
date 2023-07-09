import React, {ChangeEvent, useState} from "react";
import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {inspect} from "util";



export default {
    title: 'Select stories',
    component: Select,
    tags: ['autodocs'],
};

const callback = action('selected option was changed')
const Template: Story<SelectPropsType> = (args) => <Select {...args}/>
export const SelectMode = Template.bind({});

SelectMode.args = {
    value: '0',
    onChange: callback,
    items: [
        {title: 'nastya', value: '1'},
        {title: 'vania', value: '2'},
        {title: 'liza', value: '3'},
    ],

}

export const FixedSelect = () => {
    return(
    <Select value={'0'} onChange={callback} items={[
        {title: 'nastya', value: '1'},
        {title: 'vania', value: '2'},
        {title: 'liza', value: '3'},
    ]}
    />)
}

export const WIthChoosingValue = () => {
    const [value, setValue] = useState('2')
    return(
        <Select value={'0'} onChange={callback} items={[
            {title: 'nastya', value: '1'},
            {title: 'vania', value: '2'},
            {title: 'liza', value: '3'},
        ]}
        />)
}

export const SelectChanging = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <Select  value={parentValue} onChange={onChange} items={[
            {title: 'nastya', value: '1'},
            {title: 'vania', value: '2'},
            {title: 'liza', value: '3'},
        ]}/>
    )
}
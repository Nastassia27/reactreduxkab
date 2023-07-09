import React, {ChangeEvent, useState} from "react";
import {inspect} from "util";
import styles from './select.module.css'

export type ItemType = {
    title: any,
    value: any
}

export type SelectPropsType = {
    value: string | undefined
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const toggleItem = () => setActive(!active)
    const selectedItem = props.items.find(i => i.value === props.value)
    //debugger
    return (
        <div className={styles.select}>

            <span className={styles.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    { props.items.map(i=> <div
                    key={i.value}
                    onClick={() => {props.onChange(i.value)}}>
                        {i.title}</div>)}
                </div>
                    }


            {/* <input type={<select name="" id=""></select>}/>
           <div>{props.items.filter(el=> el.value===props.value)}</div>
            {props.items.map(i=> <div>{i.title}</div>)}*/}

            {/* <select className={styles.select} value={props.value} onChange={props.onChange}>
            {props.items.map((option) => (
                <option className={styles.option+ ''+ styles.active} key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
            </select>*/}


        </div>
    )
}
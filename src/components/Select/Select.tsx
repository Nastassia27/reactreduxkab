import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
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
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const toggleItem = () => setActive(!active)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const onItemClick = (value: string | undefined) => {
        props.onChange(value);
        toggleItem();
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
    //debugger
    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>

                <span className={styles.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : " ")}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }
                            }>
                            {i.title}</div>)}
                    </div>
                }


                {/* <input type={<select name="" id=""></select>}/>
           <div>{props.items.filter(el=> el.value===props.value)}</div>
            {props.items.map(i=> <div>{i.title}</div>)}*/
                }

                {/* <select className={styles.select} value={props.value} onChange={props.onChange}>
            {props.items.map((option) => (
                <option className={styles.option+ ''+ styles.active} key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
            </select>*/
                }


            </div>
        </>
    )
}
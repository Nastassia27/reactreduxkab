import React, {useState} from "react";

type OnOffType = {
    onClick: (value: boolean)=>void
    value: boolean
}


export function OnOff(props: OnOffType) {

    const OnStyle = {
        width: '60px',
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginRight: "5px",
        backgroundColor: props.value ? "green" : "white"
    }
    const OffStyle = {
        width: '60px',
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.value ? "white" : "red"
    }

    const IndicatorStyle = {
        width: '30px',
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red"
    }

    return (
        <div>
            <div style={OnStyle} onClick={()=>{props.onClick(!props.value)}}>On</div>
            <div style={OffStyle} onClick={()=>{props.onClick(!props.value)}}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}


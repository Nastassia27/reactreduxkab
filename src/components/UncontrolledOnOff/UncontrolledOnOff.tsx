import React, {useState} from "react";

type OnOffType = {
    onChange:(on: boolean)=>void
}


export function UncontrolledOnOff(props: OnOffType) {


    let [on, setOn] = useState(false)

    const OnStyle = {
        width: '60px',
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginRight: "5px",
        backgroundColor: on ? "green" : "white"
    }
    const OffStyle = {
        width: '60px',
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }

    const IndicatorStyle = {
        width: '30px',
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked=()=>{
        setOn(true)
        props.onChange(true)
    }

    const offClicked=()=>{
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={OnStyle} onClick={onClicked}>On</div>
            <div style={OffStyle} onClick={offClicked}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}


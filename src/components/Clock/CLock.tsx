import {useEffect, useState} from "react";

type PropsType={
mode?: 'analog'| 'digital'
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        //debugger
       const intervalID= setInterval(()=>{
           console.log('TICK')
            setDate(new Date());
        },1000)
        return()=>{
           // debugger
            clearInterval(intervalID)
        }
    },[])

    const get2digitsString = (num: number)=>num<10 ? '0'+num : num

    let view;
    switch (props.mode){
        case 'analog':
            view = <span>ANALOG</span>
            break;
        case 'digital':
            defalult:
                view  = <> <span>{get2digitsString(date.getHours())}</span>
                    :<span>{get2digitsString(date.getMinutes())}</span>
                    :<span>{get2digitsString(date.getSeconds())}</span></>
    }

    return <>
        {view}
        </>
}

export const DigitalCLockView = ()=>{

}

export const DigitalAnalog = ()=>{

}
import {useEffect, useState} from "react";

type PropsType={

}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        debugger
       const intervalID= setInterval(()=>{
           console.log('TICK')
            setDate(new Date());
        },1000)
        return()=>{
            debugger
            clearInterval(intervalID)
        }
    },[])

    const get2digitsString = (num: number)=>num<10 ? '0'+num : num

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :<span>{get2digitsString(date.getMinutes())}</span>
        :<span>{get2digitsString(date.getSeconds())}</span>
    </div>
}
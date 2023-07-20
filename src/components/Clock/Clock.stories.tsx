import {useEffect, useState} from "react";
import {Clock} from "./CLock";
export default {
    title: 'Clock demo',
    component: Clock
}

export const ClocksWithDimychExample = () => {
    //через секунду что-то обновить
    console.log('ClocksExample')
    //const initValue = useMemo(generateDate,[])


    return <>
       <Clock mode={'digital'}/>
    </>
}


export const AnalogCLockExample = () => {
    //через секунду что-то обновить
    console.log('ClocksExample')
    //const initValue = useMemo(generateDate,[])


    return <>
        <Clock mode={'analog'}/>
    </>
}
import {memo, useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    //const initValue = useMemo(generateDate,[])
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(()=>{// асинхронный код это юз эффект, делаем всю грязь в юз эффекте
        // срабатывасет каждый раз пир перерисовке компоненты

        //сначала отрисовка компоненты - потом выполняется юзэффект.
        //debugger

        document.title = counter.toString()
        //api.getUsers().then('')
            //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'Users'
    },[counter])//если не передать зависимость то срабатывает каждый раз при отрисовке
        //если зависимость есть  - то срабатывает первые раз а потом нет
    //если пустой массив то сработает один раз при монтировании компоненты

    useEffect(()=>{
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(()=>{
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    },[])
    useEffect(()=>{
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    },[counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => {
            setFake(fake+1)
        }}>fake
        </button>
        <button onClick={() => {
            setCounter(counter+1)
        }}>count
        </button>



    </>
}
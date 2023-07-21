import {memo, useEffect, useMemo, useState} from "react";
import {clearInterval} from "timers";

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
//компонента умирает когда мы из нее выходим
// или перед выховом очередным этого эффекта
    // when use clearInterval function
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

export const SetTimeoutExample = () => {
    //через секунду что-то обновить
    console.log('SetTimeoutExample')
    //const initValue = useMemo(generateDate,[])
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);


  /* useEffect(()=>{ setTimeout(()=>{
       // debugger
        console.log('SetTimeout')
        document.title = counter.toString()
    }, 1000)},[counter])*/

    useEffect(()=>{
        let newEl=setInterval(()=>{
        // debugger
        console.log('TIck'+ counter)
            setCounter((state: number)=>state+1)

    }, 1000)
    return ()=>{
            clearInterval(newEl)
    }
    },[])

    return <>
        Hello, counter: {counter}, fake:  {fake}
    </>
}

export const ClocksExample = () => {
    //через секунду что-то обновить
    console.log('ClocksExample')
    //const initValue = useMemo(generateDate,[])
    const [date, setDate] = useState(new Date());

   const newDate = ()=>{
       setDate(new Date())
   }


   useEffect(()=>{
       const timerId = setInterval(newDate, 1000);
       return function cleanup() {
           clearInterval(timerId);
       };
   },[])

    return <>
        { date.toLocaleTimeString()}
    </>
}

export const ClocksWithDimychExample = () => {
    //через секунду что-то обновить
    console.log('ClocksExample')
    //const initValue = useMemo(generateDate,[])
    const [date, setDate] = useState(new Date());

    const newDate = ()=>{
        setDate(new Date())
    }


    useEffect(()=>{
        const timerId = setInterval(newDate, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    },[])

    return <>
        { date.toLocaleTimeString()}
    </>
}

export const ResetEffectExample = () => {
    //через секунду что-то обновить
    console.log('Component rendered')
    //const initValue = useMemo(generateDate,[])
    const [counter, setCounter] = useState(1);


    useEffect(() => {
        console.log('Effect occured' + counter)
        return ()=>{
            console.log('reset effect')
        }
    }, [counter])

    const increase = ()=>{setCounter(counter+1)}

    return <>
        Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
}

export const OnCaseTrackerExample = () => {

    const [text, setText] = useState('');

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e:KeyboardEvent )=>{
            console.log(e.key);
            setText(text + e.key)
        }



        window.document.addEventListener('keypress', handler)
        return ()=>{
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])


    return <>
        Hello, text: {text}

    </>
}


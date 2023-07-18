import React, {memo, useCallback, useMemo, useState} from "react";
import {Select} from "../../components/Select/Select";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let tempResultA=1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;

        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(+e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for a: {resultB}
        </div>
    </>

}
type UsersType = {
    users: Array<string>
}
const UsersSecret = (props: UsersType) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = memo(UsersSecret)
export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])


    const addUser = () => {
        const newUsers=[...users, 'Sveta']
        setUsers(newUsers);
    }

    const newArray=useMemo(()=>{
        const newArray = users.filter(u=>u.toLowerCase().indexOf('a')>-1)
    return newArray
    },[users])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>new User
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const FirstSelectWithMemo = () => {
    const [value, setValue] = useState('2')
    const [items, setItems] = useState([
        {title: 'nastya', value: '1'},
        {title: 'vania', value: '2'},
        {title: 'liza', value: '3'},
    ])

    const newSelect=useMemo(()=>{
        console.log('newSelect')
        const newValue = items.filter(u=>u.title.toLowerCase().indexOf('i')>-1)
        return newValue
    },[items])
    return(
        <Select value={value} onChange={setValue} items={newSelect}
        />)
}

export const LikeUseCallback = () => {
    console.log('UseCallBack')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])


    const addBook = () => {
        const newUsers=[...books, 'NodeJS']
        setBooks(newUsers);
    }

  /*  const memoizedAddBook=useMemo(()=>{return () => {
        const newUsers=[...books, 'NodeJS']
        setBooks(newUsers);
    }},[books])*/
    const memoizedAddBookTwo=useCallback(()=>{
        const newUsers=[...books, 'NodeJS']
        setBooks(newUsers);
    },[books])

   /* const newArray=useMemo(()=>{
        const newArray = books.filter(u=>u.toLowerCase().indexOf('a')>-1)
        return newArray
    },[books])*/

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>

        {counter}
        <Book addBook={memoizedAddBookTwo}/>
    </>
}

const BooksSecret = (props: {addBook:()=>void}) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={()=>props.addBook()}>new Book
        </button>
       {/* {props.books.map((u, i) => <div key={i}>{u}</div>)}</div>*/}
    </div>
}

const Book = memo(BooksSecret)

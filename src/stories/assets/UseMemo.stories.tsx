import {memo, useMemo, useState} from "react";

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
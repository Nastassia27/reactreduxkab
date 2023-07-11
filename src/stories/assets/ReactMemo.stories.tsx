import {useState} from "react";

export default {
    title: 'React.memo demo'
}


const NewMessagesCounter=(props: any)=>{
    return <div>{props.count}</div>
}

type UsersType={
    users: Array<string>
}
const Users=(props: UsersType)=>{
    return <div>{props.users.map((u,i)=><div key={i}>{u}</div>)}</div>
}
export const Example1 = ()=>{
 const [counter,setCounter]=useState(0);
 const [users,setUsers]=useState(['Dimych', 'Valera', 'Artem'])

    return<>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
    <NewMessagesCounter count={counter} />
    <Users users={users} />
 </>
}
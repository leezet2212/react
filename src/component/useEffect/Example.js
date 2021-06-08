import React, { useEffect, useState } from 'react'

export default function Example1() {
    // const [count,setCount] = useState(0);
    const [name,setName] = useState('zet');

    // const [fullname,setFullname] = useState({names:'zet',fistname:'lee'});
    // const [title,setTitle] = useState('effect()laf cuar hoook')
    

    useEffect(() => {  
        
        console.log('useEffect has been called!');
        document.title = `You clicked ${name} times`;
        setFullname({name  :'leezet')
    },[count])

    return (
        <div>

            {/* <h1>Title: {title}</h1>
            <h3>Name: {fullname.names}</h3>
            <h3>Family Name: {fullname.fistname}</h3> */}

            <p>You are count : {count}.</p>
            {/* <input type="text" onChange={(e) => setName(e.target.value)}></input> */}
            <button onClick={()=>setCount(count +1)}>Click Me</button>        
        </div>
    )
}

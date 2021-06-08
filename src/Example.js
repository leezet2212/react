import React,{useState,useEffect} from 'react'

export default function Example() {
    const [count,setCount] = useState(0);
    
    useEffect(() => {
        document.title = `Bạn đã bấm ${count} lần`;
      });
    return (
        <div>
             <p>Bạn đã bấm {count} lần</p>
             <button onClick={()=> setTimeout(() => ( setCount((count) => count + 1)),1000)}>Click</button>
            <button onClick={()=>setCount((count) => count + 1)}>Click</button>
        </div>
    )
}

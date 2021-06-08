import React from "react";
import withCounter from "../withCounter";


const Increment2 =({increment})=>{
    return <button onClick={increment}>Increment</button>
}
const IncrementHoc2 = withCounter(Increment2);

export default IncrementHoc2;
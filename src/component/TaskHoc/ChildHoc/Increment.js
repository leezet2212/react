import React from "react";
import withCounter from "../withCounter";


const Increment =({increment})=>{
    return <button onClick={increment}>Increment</button>
}
const IncrementHoc = withCounter(Increment);

export default IncrementHoc;
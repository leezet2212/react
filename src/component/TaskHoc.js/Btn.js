import React, { useState } from "react"

const CounterHOC = (Component) => (props) => {
    return <Component {...props} increment={() => { }} />
}

function Counter({ increment }) {
    return (
        <button onClick={increment}>increment</button>
    )
}

export default CounterHOC(Counter)

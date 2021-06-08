import React, { useContext, useState } from "react";

const Context = React.createContext("")

function ContextProvider({ children }) {

    const [text, setText] = useState("hello")

    return < Context.Provider value={setText} >       
        <h1>{text}</h1>
        {children}
    </Context.Provider>

}

function ContextExample() {
    return <ContextProvider>
        <Blue />
        <Red />
    </ContextProvider>
}

function Blue() {
    const Testname = useContext(Context)
    return <button onClick={() => Testname("blue")}>set text blue</button>
}

function Red() {
    const setText = useContext(Context)
    return <button onClick={() => setText("red")}>set text red</button>
}

export default ContextExample

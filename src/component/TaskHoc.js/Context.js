import { createContext, useContext, useState } from "react";

const Context = createContext("")

const { Provider } = Context

function ContextProvider({ children }) {

    const [text, setText] = useState("hello")

    return <Provider children={children} value={setText} >
        {children}
        <h1>{text}</h1>
    </Provider>

}

function ContextExample() {
    return <ContextProvider>
        <Blue />
        <Red />
    </ContextProvider>
}

function Blue() {
    const setText = useContext(Context)

    return <button onClick={() => setText("blue")}>set text blue</button>

}

function Red() {
    const setText = useContext(Context)
    return <button onClick={() => setText("red")}>set text red</button>
}

export default ContextExample

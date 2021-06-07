import logo from './logo.svg';
import './App.css';
import Example from './Example.js';
import withCounter from './component/TaskHoc.js/HoverComponent';
import ContextExample from './component/TaskHoc.js/Context';
import HOCExample from "./component/TaskHoc.js/Btn"

const IncrementComponent = ({ increment, decrement }) => {
  return <>
    <button onClick={increment}>increment hoc</button>
    <button onClick={decrement}>decrement hoc</button>
  </>
}

const EnhancedIncrement = withCounter(IncrementComponent)

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example />
        <ContextExample />
        <HOCExample />
        <EnhancedIncrement />
      </header>
    </div >
  );
}

export default App;

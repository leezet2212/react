import logo from './logo.svg';
import './App.css';
import Example from './Example.js';
import HoverComponent from './component/TaskHoc/HoverComponent';
import IncrementHoc from './component/TaskHoc/ChildHoc/Increment';
import IncrementHoc2 from './component/TaskHoc/ChildHoc/Increment2';


import AppProvider from './component/TaskContext/Context';
import ContextExample from './component/TaskContext/Context2';
import ExamplesideEffect from './component/useEffect/sideClass';
import Example1 from './component/useEffect/Example';


// import withCounter from './component/TaskHoc/withCounter'


// const Increment =({increment})=>{
//   return <button onClick={increment}>Increment</button>
// }

// const Increment2 =({increment})=>{
//   return <button onClick={increment}>Increment</button>
// }

const Image1 = (props) => {
  return <img src="https://freetuts.net/public/logo/logo.png" alt="freetuts" />;
};
const Image2 = (props) => {
  return (
    <img
      src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
      alt="facebook"
    />
  );
};

// const IncrementHoc = withCounter(Increment);
// const IncrementHoc2 = withCounter(Increment2);

const ImageWithHoverOpacity1 = HoverComponent(Image1);
const ImageWithHoverOpacity2 = HoverComponent(Image2);
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example1/>
        <ExamplesideEffect/>
        <AppProvider/>
        <ContextExample/>
        <Example/>
        <HoverComponent/>
        <ImageWithHoverOpacity1/>
        <ImageWithHoverOpacity2/>
        <IncrementHoc/>
        <IncrementHoc2/>
      </header>
    </div>  
  );
}

export default App;

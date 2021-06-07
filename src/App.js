import logo from './logo.svg';
import './App.css';
import Example from './Example.js';
import HoverComponent from './component/TaskHoc.js/HoverComponent';



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
const ImageWithHoverOpacity1 = HoverComponent(Image1);
const ImageWithHoverOpacity2 = HoverComponent(Image2);
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example />
        <HoverComponent/>
        <>
      <ImageWithHoverOpacity1 />
      <ImageWithHoverOpacity2 />
    </>
      </header>
    </div>  
  );
}

export default App;

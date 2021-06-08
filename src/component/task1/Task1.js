import React, { Component } from 'react';
import './task1.css';

const AppContext = React.createContext()
class AppProvider extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'hello'
    }
  }
 render() {
    return (
    <>
    <AppProvider.Provider value={this.state.name}>
          <h1>{this.state.name}</h1>
        <Blue>
          <Green></Green>
        </Blue>
    </AppProvider.Provider>
    </>
    )
  }
}
const Green = () => (
  <div className="green">
     <AppContext.Consumer>
        {(context) => context.name}
      </AppContext.Consumer>
  </div>
)
const Blue = () => (
  <div className="blue">
    <AppContext.Consumer>
        {(context) => <button onClick={context.inc}>INC</button>}
      </AppContext.Consumer>
    <Green />
  </div>
)
export default AppProvider

// import React, { Component } from 'react'


// const AppContext=React.createContext();

// class AppProvider extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             number:10,
//             click:()=>{this.setState({number:this.state.number})}
//         }
//     }
//     render(){
//         return(
//             <div className="parent">
//                 <AppContext.Provider value={this.state}>
//                     {this.state.number}
//                 </AppContext.Provider>
//             </div>
//         )
//     }
// }

// function Blue(){
//     return(
//         <div className="blue">
//             <AppContext.Consumer>
//                 {(context)=><button onClick={context.click}>Click</button>}
//             </AppContext.Consumer>
//             <Green />
//         </div>
//     )
// }
// function Green(){
//     return(
//         <div>
//             <AppContext.Consumer>
//                 {(context)=>context.number}
//             </AppContext.Consumer>
//         </div>
//     )
// }

// export default AppProvider;
// function Blue(props){
//     return(
//         <div className="blue">
//             blue
//             <Green number1={props.number}/>
//         </div>
//     )
// }

// function Green (props){
//     return(
//         <div className="green">
//             {props.number1}
//         </div>
//     )
// }
// export default class Task1 extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             nuber:10,
//         }
//     }

//     render() {
//         return (
//             <div className="red">
//                 {this.state.nuber}
//                 <Blue number={this.state.nuber}/>
//             </div>
//         )
//     }
// }

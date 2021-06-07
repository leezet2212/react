import React from 'react';
// const Img = (props)=>{
//     return <img src="https://freetuts.net/public/logo/logo.png" alt="freetuts" />;
// }

const withCounter = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
            this.increment = this.increment.bind(this);
            this.decrement = this.decrement.bind(this);
        }
        increment() {
            this.setState({
                count: this.state.count + 1
            })
        }
        decrement() {
            console.log("COUNTER", this.state.count)

            this.setState({
                count: this.state.count - 1
            })
        }

        render() {
            return (
                <div >

                    <h1>counter hoc: {this.state.count}</h1>
                    <Component
                        increment={this.increment}
                        decrement={this.decrement} />
                </div>
            )
        }
    }
}

export default withCounter;
// export default class HoverComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             opacity:1,
//         };
//         this.onMouseEnter=this.onMouseEnter.bind(this);
//         this.onMouseLeave=this.onMouseLeave.bind(this);
//     }
//     onMouseEnter(){
//         this.setState({
//             opacity:0.5,
//         })
//     }
//     onMouseLeave(){
//         this.setState({
//             opacity:1,
//         })
//     }

//     render(){
//         return(
//             <div style={{opacity:this.state.opacity}}
//             onMouseEnter={this.onMouseEnter}
//             onMouseLeave={this.onMouseLeave}
//             >
//                 <Img/>
//             </div>
//         )
//     }
// }
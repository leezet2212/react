import React from 'react';

const withCounter = (Component)=>{
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state ={
                count: 0
            }
            this.increment= this.increment.bind(this)
        }
        increment (){
            console.log("COUNTER", this.state.count)
            this.setState({count:this.state.count + 1})
        }
        render(){
            return(
                <div>
                    <h1>Count : {this.state.count}</h1>
                    <Component increment={this.increment}/>
                </div>
            )
        }
    }
}
export default withCounter;
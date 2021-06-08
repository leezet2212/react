import React from 'react';
// const Img = (props)=>{
//     return <img src="https://freetuts.net/public/logo/logo.png" alt="freetuts" />;
// }

const HoverComponent =(ImageComponent)=>{
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                opacity:1,
            };
            this.onMouseEnter=this.onMouseEnter.bind(this);
            this.onMouseLeave=this.onMouseLeave.bind(this);
        }
        onMouseEnter(){
            this.setState({
                opacity:0.5,
            })
        }
        onMouseLeave(){
            this.setState({
                opacity:1,
            })
        }
    
        render(){
            return(
                <div style={{opacity:this.state.opacity}}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                >
                    <ImageComponent/>
                </div>
            )
        }
    }
}

export default HoverComponent;
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
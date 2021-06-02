import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props){
        super(props);
        this.state={value:'LEE ZET'};

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert('A name was submitted :' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>{this.state.value}</h3>
                <label>Name :<input type="text" value={this.state.value} onChange={this.handleChange} /></label>
                <button type="submit" >Submit</button>
            </form>
        );
    }
}

export default NameForm;

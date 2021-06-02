import React, { Component } from "react";
import Table from "./Table.js";
import Form from "./Form.js";
import Exam from "./Exam.js";
import Listkey from "./component/Listkey.js";
import LoginControl from "./component/LoginControl.js";
import NameForm from "./component/NameForm.js";
import Calculator from "./component/Calculator.js";

class App extends Component {
  state = {
    characters: [],
  };
  removeCharacter = (index)=>{
    const {characters}=this.state
      this.setState({
          characters : characters.filter((character,i) =>{
              return i !== index
          })
      })
  }
  handleSubmit=(character)=>{
      this.setState=({characters:[...this.state.characters, character]})
  }

  render() {
      const {characters}=this.state
    
    // const characters = [
    //   {
    //     name: "charly",
    //     job: "Janitor",
    //   },
    //   {
    //     name: "lee zet",
    //     job: "akjdka",
    //   },
    //   {
    //     name: "lee zet",
    //     job: "akjdka",
    //   },
    //   {
    //     name: "lee zet",
    //     job: "akjdka",
    //   },
    // ];
    const posts =[
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    const numbers =[1,2,35,5,6]
    return (
      <div className="Add">
        <Table characterDate={characters} removeCharacter={this.removeCharacter} />
        <LoginControl />
        <Form handleSubmit={this.handleSubmit} />
        <Exam number={numbers}/>
        <Listkey posts={posts}/>
        <NameForm/>
        <Calculator/>
      </div>
    );
  }
}

export default App;

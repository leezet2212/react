import React, { Component } from "react";
import Table from "./Table.js";
import Form from "./Form.js";

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
    return (
      <div className="Add">
        <Table characterDate={characters} removeCharacter={this.removeCharacter} />
        
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

import React, { Component} from "react";
import "./task1.css";

const AppContext = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  updateNumber = () => {
    this.setState({
      number: Math.random(),
    });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          number: this.state.number,
          update: this.updateNumber.bind(this),
        }}
      >
        <h1>helo: {this.state.number}</h1>
        <AppContext.Consumer>
          {() => (
            <>
              <Blue />
              <Green />
            </>
          )}
        </AppContext.Consumer>
      </AppContext.Provider>
    );
  }
}
class Blue extends Component {
  static contextType = AppContext;
  render() {
    return (
      <button
        onClick={() => {
          console.log(this.context.update());
        }}
      >
        Update Number
      </button>
    );
  }
}
// Blue.contextType = AppContext;

class Green extends Component {
  static contextType = AppContext;
  render() {
    return <p>{this.context.number}</p>;
  }
}
// Green.contextType = AppContext;
export default AppProvider;

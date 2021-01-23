import React, { Component } from "react";
import "./styles.css";
import MyComponent from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Greet from "./Components/Greet";
import Message from "./Components/Message";
import Counter from "./Components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {<Counter />} */}
        {/* <MyComponent >*/}
        {/* <Welcome >*/}
        {/* <Hello /> */}
        {/* {<Message />} */}
        <Greet name = "Diana" heroName = "Queen" /> 
        <Welcome name = "Nalan" heroName = "Diya" />

      </div>
    );
  }
}
export default App;

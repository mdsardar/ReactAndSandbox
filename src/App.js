import React, { Component } from "react";
import "./styles.css";
import MyComponent from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Greet from "./Components/Greet";
import Message from "./Components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MyComponent >*/}
        {/* <Welcome >*/}
        {/* <Hello /> */}
        {<Message />}
      </div>
    );
  }
}
export default App;

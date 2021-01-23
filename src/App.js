import React, { Component } from "react";
import "./styles.css";
import MyComponent from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Greet from "./Components/Greet";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MyComponent >*/}
        {/* <Welcome >*/}
        {/* <Hello /> */}
        <Greet name="Chan Batty" heroName="Good Lady">
          <p> This is children node </p>
        </Greet>
        <Greet name="Diana" heroName="Queen">
          <button>Action</button>
        </Greet>
        <Welcome name="Brude" heroName="Gentle Man" />
        <Welcome name="Chan Batty" heroName="Good Lady" />
        <Welcome name="Nalan" heroName="Mystic" />
      </div>
    );
  }
}
export default App;

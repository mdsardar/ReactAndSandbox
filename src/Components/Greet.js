import React from "react";

/*function Greet() {
  return <h1> Hello Viswas </h1>
}*/

// One way of destructuring props from a component
/* const Greet = ({name, heroName}) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}{" "}
        </h1>
    </div>
  )
} */

// Second way of destrucuturing props

const Greet = props => {
  const {name, heroName} = props
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
        </h1>
    </div>
  )
}

/* const Greet = (props) => {
  console.log(props);
  return (
    <div>
      {" "}
      <h1>
        {" "}
        Hello {props.name} a.k.a {props.heroName}{" "}
      </h1>
      {props.children}
    </div>
  );
}; */

export default Greet

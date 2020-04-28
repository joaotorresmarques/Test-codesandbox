import React, { useState } from "react";
import "./styles.css";

//elemento
const elemento = "Joao Marcos"; //JSX
const elemento2 = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Testando novamente")
);

//componente - funcional

/*function MostrarI(props){
  return <p>{props.i}</p>;
}*/
const MostrarI = props => {
  return <p>{props.i}</p>;
};
export default function App(props) {
  const [i, setI] = useState(1);
  //let i = 1;
  const increment = () => {
    //arrow function
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>
        Hello {props.name} {i}
      </h1>
      <button onClick={increment}>Clica aqui </button>
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
      {elemento2}
      <MostrarI i={i} />
    </div>
  );
}

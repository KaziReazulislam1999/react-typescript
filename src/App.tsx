import React from "react";
import "./App.css";
import ButtonStyle from "./components/ButtonStyle";

const btnStyle = {
  backgroundColor: "red",
  color: "#FFF",
  padding: 20,
};

function App() {
  return (
    <div className="App">
      <h2>Style Props</h2>
      <ButtonStyle btnStyle={btnStyle} />
    </div>
  );
}

export default App;

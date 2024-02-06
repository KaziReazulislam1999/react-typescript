import React from "react";
import "./App.css";
import Button from "./components/Button";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <h2>Children Props</h2>
      <Button>Click Me</Button>
      <Post />
    </div>
  );
}

export default App;

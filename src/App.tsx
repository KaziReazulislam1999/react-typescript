import React from "react";
import "./App.css";

import DataFetch from "./components/DataFetch";

const users = [];
function App() {
  return (
    <div className="App">
      <h2>User Management</h2>
      <DataFetch status="loading" />
    </div>
  );
}

export default App;

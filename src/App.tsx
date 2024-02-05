import React from "react";
import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <h2>User Management</h2>
      <User
        name="Kazi Monjurul Islam"
        age={55}
        email="kazimonjurul@gmail.com"
        isRegistered={true}
        lang={["Bangla", "English"]}
      />
      <User
        name="Kazi Reazul Islam"
        age={24}
        email="kazireazul1999@gmail.com"
        isRegistered={false}
        lang={["Bangla"]}
      />
    </div>
  );
}

export default App;

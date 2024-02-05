import React from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const user1 = {
    name: "Kazi Monjurul Islam",
    age: 55,
    email: "kazimonjurul@gmail.com",
    isRegistered: true,
    lang: ["Bangla", "English"],
  };

  const user2 = {
    name: "Kazi Reazul Islam",
    age: 24,
    email: "kazireazul1999@gmail.com",
    isRegistered: true,
    lang: ["Bangla"],
  };
  return (
    <div className="App">
      <h2>User Management</h2>
      <User user={user1} />
      <User user={user2} />
    </div>
  );
}

export default App;

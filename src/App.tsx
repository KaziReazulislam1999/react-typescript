import React from "react";
import "./App.css";
import User from "./components/User";
import UserDemo from "./components/UserDemo";

const users = [
  {
    id: 1,
    name: "Monjurul Islam",
    email: "monjurulislam@gmail.com",
    age: 55,
  },

  {
    id: 3,
    name: "Akibul Islam",
    email: "akibulislam@gmail.com",
    age: 25,
  },
  {
    id: 4,
    name: "Nazrul Islam",
    email: "nazrulislam@gmail.com",
    age: 40,
  },
  {
    id: 5,
    name: "Mustafizur Islam",
    email: "mustafizur@gmail.com",
    age: 30,
  },
];
function App() {
  return (
    <div className="App">
      <h2>User Management</h2>
      <UserDemo users={users} />
    </div>
  );
}

export default App;

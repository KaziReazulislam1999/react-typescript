import React, { useState } from "react";
import "./App.css";

type User = {
  id: number;
  name: string;
};

function App() {
  const [user, setUser] = useState<null | User>(null);

  const handleAddUser = () => {
    setUser({
      id: 1,
      name: "Reazul",
    });
    console.log(user);
  };

  return (
    <div className="App">
      <button onClick={handleAddUser}>Add Users</button>
      <p>{user?.name}</p>
    </div>
  );
}

export default App;

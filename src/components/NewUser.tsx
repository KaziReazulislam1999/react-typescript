import React, { useState } from "react";

const NewUser = () => {
  const [userName, setUserName] = useState("");

  const handleUserNamechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event?.target.value);
  };

  const handleCick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(userName);
  };

  return (
    <div>
      <h2>Create New User</h2>
      <input
        type="text"
        placeholder="Enter user name..."
        value={userName}
        onChange={handleUserNamechange}
      />
      <button onClick={handleCick}>Show name</button>{" "}
    </div>
  );
};

export default NewUser;

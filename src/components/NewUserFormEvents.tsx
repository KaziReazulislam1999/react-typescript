import React, { useState } from "react";

const NewUserFormEvents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = { name, email };
    console.log(newUser);
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              value={name}
              required
              onChange={handleNameChange}
            />
          </label>
          <br />
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default NewUserFormEvents;

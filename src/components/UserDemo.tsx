import React from "react";

type UserDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: UserDemoProps) => {
  return (
    <div>
      {users.map((user, index) => {
        const { id, name, email, age } = user;

        return (
          <div key={id}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{age}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;

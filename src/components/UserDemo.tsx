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
  console.log(users);
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={user.id}>
            <h1>{user.id}</h1>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <h3>{user.age}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;

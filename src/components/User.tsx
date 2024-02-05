import React from "react";

//built in data type : string , number, boolean ,void , null

//user defined types -> array, object, enum,union, any , custom type

type UserProps = {
  user: {
    name: string;
    age: number;
    email: string;
    isRegistered: boolean;
    lang: string[];
  };
};

const User = ({ user }: UserProps) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age} years old</p>
      <p>
        {user.isRegistered ? (
          <p>Registered User</p>
        ) : (
          <p>User Not Registered</p>
        )}
      </p>
      <p>
        {user.lang.map((language, index) => {
          return <span key={index}> {language} </span>;
        })}
      </p>
    </div>
  );
};

export default User;

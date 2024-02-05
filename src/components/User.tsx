import React from "react";

//built in data type : string , number, boolean ,void , null

type UserProps = {
  name: string;
  age: number;
  email: string;
  isRegistered: boolean;
};

const User = (props: UserProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age} years old</p>
      <p>
        {props.isRegistered ? (
          <p>Registered User</p>
        ) : (
          <p>User Not Registered</p>
        )}
      </p>
    </div>
  );
};

export default User;

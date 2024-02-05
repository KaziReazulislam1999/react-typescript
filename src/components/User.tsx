import React from "react";

//built in data type : string , number, boolean ,void , null

type UserProps = {
  name: string;
  age: number;
  email: string;
  isRegistered: boolean;
};

const User = ({ name, age, email, isRegistered }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age} years old</p>
      <p>
        {isRegistered ? <p>Registered User</p> : <p>User Not Registered</p>}
      </p>
    </div>
  );
};

export default User;

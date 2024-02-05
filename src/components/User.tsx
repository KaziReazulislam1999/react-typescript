import React from "react";

//built in data type : string , number, boolean ,void , null

//user defined types -> array, object, enum,union, any , custom type

type UserProps = {
  name: string;
  age: number;
  email: string;
  isRegistered: boolean;
  lang: string[];
};

const User = ({ name, age, email, isRegistered, lang }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age} years old</p>
      <p>
        {isRegistered ? <p>Registered User</p> : <p>User Not Registered</p>}
      </p>
      <p>
        {lang.map((language, index) => {
          return <span key={index}> {language} </span>;
        })}
      </p>
    </div>
  );
};

export default User;

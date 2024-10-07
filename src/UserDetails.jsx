import React from "react";
import { Link } from "react-router-dom";

export default function UserDetails({ userInfo }) {
  const { id, name, email, website } = userInfo;
  return (
    <div className="border-2 border-black rounded p-2 text-center flex flex-col">
      <h1>User Name : {name}</h1>
      <h1>User Email Address : {email}</h1>
      <h1 className="flex-grow">User Website : {website}</h1>
      <Link
        className="border-2 px-2 m-auto border-black rounded w-[50%]"
        to={`/user/${id}`}
      >
        Show Details
      </Link>
    </div>
  );
}

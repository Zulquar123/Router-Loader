import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function UserInfo() {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/user");
  };
  const info = useLoaderData();
  const { name, id, email, username, website, phone, company } = info;
  return (
    <div className="w-[30%] m-auto flex flex-col items-center mt-10 border-4 border-black rounded gap-5 p-5">
      <h1>User ID : {id}</h1>
      <h1>User Name : {name}</h1>
      <h1>User Email : {email}</h1>
      <h1>User Website : {website}</h1>
      <h1>User Phone No : {phone}</h1>
      <h1>User Company : {company.name}</h1>
      <button onClick={handleBtn} className="border-2 border-black p-2 rounded">
        {" "}
        Go Back ⬅️
      </button>
    </div>
  );
}

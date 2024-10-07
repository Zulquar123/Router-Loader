import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import UserDetails from "./UserDetails";

export default function User() {
  const user = useLoaderData();
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/");
  };
  return (
    <div className="w-[95%] mt-5 m-auto">
      <h1 className="font-bold text-4xl border-4 border-black rounded-xl inline px-2 ">
        User Details : {user.length}
      </h1>
      <p className="border-4 border-black rounded-xl mt-4 p-2 text-justify grid grid-cols-4 gap-2 ">
        {user.map((userInfo, index) => (
          <UserDetails userInfo={userInfo} />
        ))}
      </p>
      <button
        className="px-2 mt-3 text-xl border-4 border-black rounded"
        onClick={handleBtn}
      >
        ⬅️ Back...
      </button>
    </div>
  );
}

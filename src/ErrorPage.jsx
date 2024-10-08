import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/");
  };
  const error = useRouteError();
  console.log(error);
  return (
    <div className="border-4 rounded border-black text-5xl font-bold  w-[40%] m-auto mt-20 text-center p-20 ">
      <h1>Oops! {error.status} Error</h1>
      <h1>Page {error.message || error.statusText}</h1>
      <button
        className="border-2 rounded border-black mt-10 p-2 rounded"
        onClick={handleBtn}
      >
        Go Back ⬅️
      </button>
    </div>
  );
}

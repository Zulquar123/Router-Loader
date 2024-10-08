import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./User";
import Home from "./Home";
import About from "./About";
import UserInfo from "./UserInfo";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user",
        element: <User />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/user/:userid",
        element: <UserInfo />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

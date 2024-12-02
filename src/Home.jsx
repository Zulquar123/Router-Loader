import Navbar from "./Navbar";
import { Outlet, useLocation, useNavigation } from "react-router-dom";

export default function Home() {
  const navigation = useNavigation( );
  const location = useLocation();
  return (
    <>
      <Navbar />
      {navigation.state === "Loading" ? <h1>Loading .........</h1> : <Outlet />}
    </>
  );
}

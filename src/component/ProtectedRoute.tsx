import UserContext from "../context/UserContext";
import {useContext} from "react";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
  const context = useContext(UserContext);
  if (!context.user) {
    return <Navigate to="/" replace={true}/>
  }

  return <Outlet/>
}

export default ProtectedRoute;

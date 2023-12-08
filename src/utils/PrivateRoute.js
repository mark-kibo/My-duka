import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { sidebarcontext } from "../context/SideBarContext";

const PrivateRoute = () => {
  const { user } = useContext(sidebarcontext);

  return user && user?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

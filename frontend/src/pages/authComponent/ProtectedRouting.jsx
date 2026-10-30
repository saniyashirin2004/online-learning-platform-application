
import { Navigate, Outlet } from "react-router-dom";
import isAuthorized from "../../utils/Auth";

const ProtectedRouting = () => {
  return isAuthorized() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRouting;

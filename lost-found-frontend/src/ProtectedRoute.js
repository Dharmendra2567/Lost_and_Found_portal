
import { Navigate } from "react-router-dom";
import { ADMIN } from "./adminConfig";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.username !== ADMIN.username) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

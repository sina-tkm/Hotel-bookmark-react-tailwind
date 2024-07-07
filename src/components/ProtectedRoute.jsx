import { useEffect } from "react";
import { useLogin } from "./hooks/context/AuthProvider";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useLogin();
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated]);
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;

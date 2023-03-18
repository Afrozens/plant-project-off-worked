import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthContext from "@/contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { success } = useSelector((state) => state.user);
  const { loadingGetUser } = useContext(AuthContext);

  if (loadingGetUser) return <h1>Loading</h1>;

  if (!success) return <Navigate to="/" />;

  return <>{children}</>;
};

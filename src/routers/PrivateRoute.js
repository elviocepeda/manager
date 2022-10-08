import { useValidateToken } from "../components/hooks/useValidateToken";

const PrivateRoute = ({ children }) => {
  useValidateToken(localStorage.getItem("jwt"), false);

  return children;
};

export default PrivateRoute;

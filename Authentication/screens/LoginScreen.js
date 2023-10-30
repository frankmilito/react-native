import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/authContext";

function LoginScreen() {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoginScreen, setIsLoginScreen] = useState(true);
  const signinHandler = async (data) => {
    setIsLoading(true);
    const token = await login(data);

    authCtx.authenticate(token);
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message={"Logging in..."} />;
  }
  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;

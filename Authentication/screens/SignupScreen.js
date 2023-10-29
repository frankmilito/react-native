import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/authContext";

function SignupScreen() {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const signupHandler = async (data) => {
    setIsLoading(true);
    const token = await createUser(data);
    authCtx.authenticate(token);
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message={"Creating user..."} />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@nextui-org/react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button color="primary" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default Login;
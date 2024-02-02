import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../components/Login";
import logo from './logo.png';
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../components/Logout";

const Navbars = () => {
    const { isAuthenticated } = useAuth0()
    return (
        <Router>
            <Navbar className="bg-blue-500">
                <NavbarBrand>
                    <Link to="/">
                        <img src={logo} alt="circuitry logo" className="h-12 w-auto" />
                    </Link>
                </NavbarBrand>

                <NavbarContent justify="end">
                    <NavbarItem>
                        {isAuthenticated ? <Logout /> : <Login />}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </Router>
    );
}

export default Navbars;

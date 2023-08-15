import React from "react";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="px-6 py-4 shadow">
      <ul className="flex justify-between text-2xl font-extrabold text-blue-500">
        <li>PrimePlace</li>
        <li className="">
          <Link to="/">
            <Button variant="outlined">Home</Button>
          </Link>
          {location.pathname !== "/" && (
            <span className="ml-1">
              <Button variant="outlined" onClick={() => window.history.back()}>
                Back
              </Button>
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

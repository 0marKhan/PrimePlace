import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 shadow">
      <ul className="flex justify-between text-2xl font-extrabold text-blue-500">
        <li>PrimePlace</li>
        <li className="">
          <Link to="/">
            <Button variant="outlined">Home</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

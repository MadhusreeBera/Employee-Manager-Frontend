import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <NavLink className="pageNames" exact to="/">
          <h2>Employee Manager</h2>
        </NavLink>
      </div>

      <div id="navbarSupportedContent">
        <NavLink className="pageNames" aria-current="page" exact to="/">
          Home
        </NavLink>

        <NavLink className="pageNames" exact to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

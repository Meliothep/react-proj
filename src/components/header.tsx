import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              pokedex
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
                Collection
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>Just like 80% of your students</h1>
    </div>
  );
};

export default Header;
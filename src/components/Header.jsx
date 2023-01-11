import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>ToDoApp</h1>
        <ul>
          <li>
            <NavLink to={"/"}>Add</NavLink>
          </li>
          <li>
            <NavLink to={"/list"}>List</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;

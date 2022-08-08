import React, { useState } from "react";
import menuItem from "./MenuItems";
import "./Navbar.css";
import {  Link } from "react-router-dom";


const Nav = () => {
  const [state, setstate] = useState(false);

  const handleClick = () => {
    setstate(!state);
  };
  return (
    <nav>
      <p className="logo-name">Compasslry</p>
      
      <div className="menu-icon" onClick={handleClick}>
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={state ? "nav-menu active" : "nav-menu"}>
        {menuItem.map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              <a
              className="list-item-name"
               
                to={item.url}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

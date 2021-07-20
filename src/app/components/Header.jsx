import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderStyle.css";

export const Header = () => {
  return (
    <div>
      <header id="main-header">
        <section id="branding">
          <section id="logo">
            <img src="https://via.placeholder.com/150" />
          </section>
          <section id="title">
            <h1>Fordorth</h1>
          </section>
        </section>
        <section id="navigation">
          <nav>
            <div id="toggleButton">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul>
              <li className="link">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="divider">|</li>
              <li className="link">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li className="divider">|</li>
              <li className="link">
                <NavLink to="/contact">Contacts</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
};

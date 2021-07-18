import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header id="main-header">
        <section id="branding">
          <img src="https://via.placeholder.com/150" />
        </section>
        <section id="title">
          <h1>Fordorth</h1>
        </section>
        <section id="navigation">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contacts</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
};

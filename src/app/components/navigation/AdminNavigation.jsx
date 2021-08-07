import React from "react";
import { NavLink } from "react-router-dom";

export const AdminNavigation = () => {
  return (
    <nav id="adminMenu">
      <ul>
        <li>
          <NavLink to="/admin/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/admin/blogposts">Blog Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

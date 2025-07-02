import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Sidebar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/kanban">Kanban</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

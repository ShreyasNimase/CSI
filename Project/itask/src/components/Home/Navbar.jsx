import React from "react";
import PropTypes from "prop-types";

const Navbar = ({onLogout,username}) => {
  return (
    <header className="home-header">
      <div>
        <h2>iTask</h2>
      </div>
      <div>
        <span className="username-label">{username || "Guest"}</span>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  username: PropTypes.string,
};

export default Navbar;

import React from "react";

function Header({ onLogout }) {
  return (
    <header className="home-header">
      <h1>Welcome to the Home Page 👋</h1>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </header>
  );
}

export default Header;
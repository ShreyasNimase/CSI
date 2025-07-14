import React from "react";
import './NavbarFooter.css'
import { Link,useNavigate } from "react-router-dom";




const Navbar = () => {
    const username = localStorage.getItem("username");
    const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      alert("You have been logged out.");
      navigate("/");
    };

  return (
    <header className="home-header">
      <div>
        <Link to='/home'><h2 style={{color:'white'}}>iTask</h2></Link>
      </div>
      <div>
        <span className="username-label">{username || "Guest"}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};


export default Navbar;

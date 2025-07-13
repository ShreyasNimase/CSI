import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("username");
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
    }else{
      setUsername(storedUsername);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    alert("You have been logged out.");
    navigate("/");
  };

  return (
    <div className="home-container">
      <Navbar onLogout={handleLogout} username={username}/>
      <MainContent  username={username}/>
      <Footer />
    </div>
  );
};

export default Home;

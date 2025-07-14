
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";


import { useEffect } from "react";

const Home = () => {
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <div>
        <Link to="/kanban"><h2>Go to Kanban Board</h2></Link>
      </div>
    </div>
  );
};

export default Home;

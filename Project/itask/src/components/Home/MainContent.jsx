
import PropTypes from "prop-types";
import React from "react";

const MainContent = ({username}) => {
  

  return (
    <main className="home-main">
      <section className="welcome-section">
        <h2>Hello, {username || "Guest"}!</h2>
        <p>You’ve successfully logged in. 🎉</p>
      </section>

      
    </main>
  );
};

MainContent.propTypes = {
  username: PropTypes.string, 
};
export default MainContent;
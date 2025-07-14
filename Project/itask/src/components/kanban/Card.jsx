import React from "react";
import PropTypes from "prop-types";

const Card = ({ title }) => {
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;

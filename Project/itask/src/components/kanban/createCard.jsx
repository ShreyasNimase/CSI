import React, { useState } from "react";
import PropTypes from "prop-types";

const CreateCard = ({ onAddCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddCard(title, description);
      setTitle("");
      setDescription("");
      setShowForm(false);
    }
  };

  return (
    <div className="create-card-container">
      {showForm ? (
        <form onSubmit={handleSubmit} className="card-form">
          <input
            type="text"
            placeholder="Enter card title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="card-input"
          />
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="card-input"
          />
          <div className="card-actions">
            <button type="submit" className="btn-add">Add</button>
            <button type="button" onClick={() => setShowForm(false)} className="btn-cancel">Cancel</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)} className="btn-create-card">
          + Create Card
        </button>
      )}
    </div>
  );
};

CreateCard.propTypes = {
  onAddCard: PropTypes.func.isRequired,
};

export default CreateCard;

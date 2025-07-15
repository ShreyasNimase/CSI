import React from "react";
import PropTypes from "prop-types";
import "./Kanban.css";

const Card = ({ card, onEdit, onDelete }) => {
  let statusIcon = "";
  let statusLabel = "To Do";
  if (card.status === "inProgress") {
    statusIcon = "⚡️";
    statusLabel = "In Progress";
  } else if (card.status === "done") {
    statusIcon = "✅";
    statusLabel = "Done";
  }

  return (
    <div className="kanban-card">
      <p className="kanban-card-title">
        {statusIcon && <span>{statusIcon} </span>}
        {card.title}
      </p>
      {card.description && (
        <p className="kanban-card-description">{card.description}</p>
      )}
      <p className="kanban-card-status">
        <strong>Status:</strong> {statusLabel}
      </p>
      <div className="card-actions">
        <button onClick={() => onEdit(card)} className="btn-edit">
          Edit
        </button>
        <button onClick={() => onDelete(card.id)} className="btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    boardId: PropTypes.string.isRequired,
    listId: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;

import React from "react";
import PropTypes from "prop-types";

const BoardItem = ({ board, isActive, onSelect, onRename, onDelete }) => {
  return (
    <li key={board}>
      <button
        className={`board-item ${isActive ? "active" : ""}`}
        onClick={() => onSelect(board)}
      >
        {board}
      </button>
      <div style={{ display: "flex", gap: "5px", marginLeft: "10px" }}>
        <button onClick={() => onRename(board)} className="btn-edit">✏️</button>
        <button onClick={() => onDelete(board)} className="btn-delete">🗑️</button>
      </div>
    </li>
  );
};

BoardItem.propTypes = {
  board: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRename: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BoardItem;

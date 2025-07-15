// Board.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./List";
import AddEditTicketModal from "./AddEditTicketModal";
import { addCard } from "../../redux/cardsSlice";
import PropTypes from "prop-types";

const Board = ({ boardName, boardId }) => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.lists);

  const boardLists = lists.filter((list) => list.boardId === boardId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const todoList = boardLists.find(
    (list) => list.name.toLowerCase() === "to do"
  );

  const handleCreateCard = (formData) => {
    const newCard = {
      id: Date.now().toString(),
      boardId: boardId,
      listId: todoList?.id,
      status: "todo",
      title: formData.title,
      description: formData.description,
      createdAt: new Date().toISOString(),
    };
    dispatch(addCard(newCard));
    setIsModalOpen(false);
  };

  return (
    <div className="board-page">
      <div className="board-title">
        {boardName}
        {todoList && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-create-card"
            style={{ marginLeft: "15px", fontSize: "14px" }}
          >
            + Add Ticket
          </button>
        )}
      </div>

      <div className="board">
        {boardLists.map((list) => (
          <List key={list.id} listId={list.id} listTitle={list.name} />
        ))}
      </div>

      {todoList && (
        <AddEditTicketModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateCard}
          mode="create"
        />
      )}
    </div>
  );
};

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
};

export default Board;

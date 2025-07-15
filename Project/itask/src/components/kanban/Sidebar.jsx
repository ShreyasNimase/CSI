import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setActiveBoard,
  addBoard,
  deleteBoard,
  renameBoard,
} from '../../redux/boardsSlice';
import './Kanban.css';

const Sidebar = () => {
  const boards = useSelector((state) => state.boards.boards);
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const dispatch = useDispatch();

  const [newBoardName, setNewBoardName] = useState('');
  const [renamingBoardId, setRenamingBoardId] = useState(null);
  const [renameValue, setRenameValue] = useState('');

  const handleAddBoard = () => {
    if (!newBoardName.trim()) return;
    const newBoard = {
      id: Date.now().toString(),
      name: newBoardName,
    };
    dispatch(addBoard(newBoard));
    dispatch(setActiveBoard(newBoard.id));
    setNewBoardName('');
  };

  const handleRenameBoard = (id) => {
    if (!renameValue.trim()) return;
    dispatch(renameBoard({ id, newName: renameValue }));
    setRenamingBoardId(null);
    setRenameValue('');
  };

  const handleDeleteBoard = (id) => {
    if (window.confirm('Are you sure you want to delete this board?')) {
      dispatch(deleteBoard(id));
    }
  };

  return (
    <div className="sidebar-container">
      <h3>Boards</h3>
      {boards.map((board) => (
        <div key={board.id} className="board-item-wrapper">
          {renamingBoardId === board.id ? (
            <div className="sidebar-item-rename">
              <input
                type="text"
                value={renameValue}
                onChange={(e) => setRenameValue(e.target.value)}
                placeholder="New name"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.stopPropagation();
                    handleRenameBoard(board.id);
                  }
                  if (e.key === 'Escape') {
                    e.stopPropagation();
                    setRenamingBoardId(null);
                  }
                }}
              />
              <button type="button" onClick={() => handleRenameBoard(board.id)}>✔</button>
              <button type="button" onClick={() => setRenamingBoardId(null)}>✖</button>
            </div>
          ) : (
            <>
              {/* Use real button for accessibility */}
              <button
                className={`sidebar-item ${
                  board.id === activeBoardId ? 'sidebar-item--active' : ''
                }`}
                onClick={() => dispatch(setActiveBoard(board.id))}
                title={`Select ${board.name}`}
              >
                {board.name}
              </button>

              <div className="sidebar-actions-inline">
                <button
                  type="button"
                  onClick={() => {
                    setRenamingBoardId(board.id);
                    setRenameValue(board.name);
                  }}
                  title="Rename Board"
                >
                  ✏️
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteBoard(board.id)}
                  title="Delete Board"
                >
                  🗑️
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      <div className="sidebar-new-board">
        <input
          type="text"
          placeholder="New board name"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddBoard();
            }
          }}
        />
        <button type="button" onClick={handleAddBoard}>Add</button>
      </div>
    </div>
  );
};

export default Sidebar;

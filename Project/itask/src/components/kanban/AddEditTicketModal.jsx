// src/components/kanban/AddEditTicketModal.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, editCard } from '../../redux/cardsSlice';
import { getListIdByStatus } from '../../utils/statusToListId';
import { v4 as uuidv4 } from 'uuid';
import './Kanban.css';

const AddEditTicketModal = ({ isOpen, onClose, mode, initialData, boardId }) => {
  const dispatch = useDispatch();
  const allLists = useSelector((state) => state.lists.lists);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setStatus(initialData.status);
    } else {
      setTitle('');
      setDescription('');
      setStatus('todo');
    }
  }, [mode, initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (mode === 'add') {
      const listId = getListIdByStatus(allLists, boardId, 'todo');
      const newCard = {
        id: uuidv4(),
        title,
        description,
        status: 'todo',
        boardId,
        listId,
      };
      dispatch(addCard(newCard));
    } else if (mode === 'edit') {
      const listId = getListIdByStatus(allLists, boardId, status);
      const updatedCard = {
        ...initialData,
        title,
        description,
        status,
        listId,
      };
      dispatch(editCard(updatedCard));
    }

    onClose();
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            className="modal-input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="modal-textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {mode === 'edit' ? (
            <select
              className="modal-input"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          ) : (
            <input className="modal-input" value="Status: To Do" readOnly />
          )}

          <div className="modal-buttons">
            <button type="submit" className="modal-button-primary">
              {mode === 'add' ? 'Create' : 'Update'}
            </button>
            <button type="button" className="modal-button-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

AddEditTicketModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['add', 'edit']).isRequired,
  initialData: PropTypes.object,
  boardId: PropTypes.string.isRequired,
};

export default AddEditTicketModal;

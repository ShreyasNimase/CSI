import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import AddEditTicketModal from './AddEditTicketModal';
import Sidebar from './Sidebar';
import { getListIdByStatus } from '../../utils/statusToListId';
import './Kanban.css';

const KanbanPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  const activeBoardId = useSelector(state => state.boards.activeBoardId);
  const boards = useSelector(state => state.boards.boards);
  const lists = useSelector(state => state.lists.lists);
  const cards = useSelector(state => state.cards.cards);

  const activeBoard = boards.find(board => board.id === activeBoardId);
  const getListId = (status) => getListIdByStatus(lists, activeBoardId, status);

  const todoListId = getListId('todo');
  const inProgressListId = getListId('inProgress'); // Still used for filtering lists
  const doneListId = getListId('done');             // Still used for filtering lists

  const filterCards = (listId) =>
    cards.filter((card) => card.boardId === activeBoardId && card.listId === listId);

  const openEditModal = (card) => {
    setEditingCard(card);
    setModalOpen(true);
  };

  const openCreateModal = () => {
    setEditingCard(null);
    setModalOpen(true);
  };

  return (
    <div className="kanban-layout">
      <Sidebar />
      <div className="kanban-content">
        <div className="kanban-header">
          <h2>{activeBoard?.name || 'Untitled Board'}</h2>
          <button className="kanban__create-ticket-btn" onClick={openCreateModal}>
            + Create Ticket
          </button>
        </div>
        <div className="kanban-board">
          <List listName="To Do" listId={todoListId} cards={filterCards(todoListId)} onEdit={openEditModal} />
          <List listName="In Progress" listId={inProgressListId} cards={filterCards(inProgressListId)} onEdit={openEditModal} />
          <List listName="Done" listId={doneListId} cards={filterCards(doneListId)} onEdit={openEditModal} />
        </div>
      </div>
      {modalOpen && (
        <AddEditTicketModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          mode={editingCard ? 'edit' : 'add'}
          initialData={editingCard}
          boardId={activeBoardId}
        />
      )}
    </div>
  );
};

export default KanbanPage;
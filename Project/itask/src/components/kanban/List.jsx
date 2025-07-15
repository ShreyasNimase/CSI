import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/cardsSlice';
import './Kanban.css';

const List = ({ listName, listId, cards, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      dispatch(deleteCard(id));
    }
  };

  return (
    <div className="kanban-column">
      <h4 className="kanban-column-title">{listName}</h4>
      <div className="kanban-cards-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} onEdit={onEdit} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  listName: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default List;
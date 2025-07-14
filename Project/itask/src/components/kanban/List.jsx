import React, { useState } from "react";
import PropTypes from "prop-types";
import CreateCard from "./CreateCard";
import Card from "./Card";

const List = ({ listTitle }) => {
  const [cards, setCards] = useState([]);

  const addCard = (title) => {
    const newCard = {
      id: Date.now(),
      title,
    };
    setCards([...cards, newCard]);
  };

  return (
    <div className="list">
      <h3>{listTitle}</h3>
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
        <CreateCard onAddCard={addCard} />
      </div>
    </div>
  );
};

List.propTypes = {
  listTitle: PropTypes.string.isRequired,
};

export default List;

import React from "react";
import List from "./List";
import "./Kanban.css";

const Board = () => {
  return (
    <div className="board-page">
    <div className="board">
      <List listTitle="To Do" />
      <List listTitle="In Progress" />
      <List listTitle="Done" />
    </div>
    </div>
  );
};

export default Board;

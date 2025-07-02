import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  { id: "1", content: "Design UI" },
  { id: "2", content: "Setup backend" },
  { id: "3", content: "Integrate API" },
];

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  return (
    <div>
      <h1>Kanban Board</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="kanban">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: "8px",
                        margin: "4px",
                        background: "#eee",
                        borderRadius: "4px",
                        ...provided.draggableProps.style,
                      }}
                    >
                      {task.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Kanban;

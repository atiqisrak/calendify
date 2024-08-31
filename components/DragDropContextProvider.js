import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EventCard from "./EventCard";

const DragDropContextProvider = ({ events, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="events">
        {(provided) => (
          <div
            className="p-4 max-h-[800px] overflow-y-auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {events.map((event, index) => (
              <Draggable
                key={event.id}
                draggableId={event.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mb-2"
                  >
                    <EventCard event={event} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropContextProvider;

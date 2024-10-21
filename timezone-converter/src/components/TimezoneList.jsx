import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TimezoneCard from "./TimezoneCard";

const TimezoneList = ({ timezones, removeTimezone, selectedDate }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTimezones = Array.from(timezones);
    const [moved] = reorderedTimezones.splice(result.source.index, 1);
    reorderedTimezones.splice(result.destination.index, 0, moved);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="timezones">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {timezones.map((timezone, index) => (
              <Draggable key={timezone.id} draggableId={timezone.id.toString()} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <TimezoneCard timezone={timezone} removeTimezone={removeTimezone} selectedDate={selectedDate} />
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

export default TimezoneList;

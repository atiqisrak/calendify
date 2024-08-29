import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // For month view
import timeGridPlugin from "@fullcalendar/timegrid"; // For week and day views
import interactionPlugin from "@fullcalendar/interaction"; // For drag-and-drop, dateClick

const MainCalendar = ({ events, onEventDrop, selectedDate }) => {
  const calendarRef = useRef(null);

  // Handle date click (when a date is clicked on the calendar)
  const handleDateClick = (arg) => {
    console.log(`Date clicked: ${arg.dateStr}`);
    // You can add logic to create a new event or show details for the date clicked
  };

  // Handle event drop (when an event is dragged and dropped to a new date/time)
  const handleEventDrop = (info) => {
    console.log("Event dropped on: ", info.event.start);
    // Update the event's start date in state or backend here
    if (onEventDrop) onEventDrop(info.event);
  };

  // Ensure unique keys for events
  const formattedEvents = events.map((event, index) => ({
    ...event,
    id: `${event.client_id}-${event.id}-${index}`, // Generate a unique key using multiple fields
  }));

  return (
    <div className="w-full p-4 border border-gray-300 rounded-md shadow-sm mt-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={formattedEvents} // Use formatted events with unique keys
        dateClick={handleDateClick}
        eventDrop={handleEventDrop}
        editable={true} // Allows events to be dragged and dropped
        droppable={true} // Allows items to be dropped onto the calendar
        ref={calendarRef}
        initialDate={selectedDate}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={500}
      />
    </div>
  );
};

export default MainCalendar;

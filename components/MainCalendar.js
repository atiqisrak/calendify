import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const MainCalendar = ({
  events,
  onEventDrop,
  selectedDate,
  setFilteredEvents,
  setFilteredClients,
}) => {
  const calendarRef = useRef(null);

  const handleDateClick = (arg) => {
    console.log(`Date clicked: ${arg.dateStr}`);
  };

  const handleEventDrop = (info) => {
    console.log("Event dropped on: ", info.event.start);
    if (onEventDrop) onEventDrop(info.event);
  };

  return (
    <div className="w-full p-4 border border-gray-300 rounded-md shadow-sm mt-4">
      {/* Dropdown Controls */}
      <div className="flex justify-between items-center mb-4">
        <select
          className="border p-2 rounded-md"
          onChange={(e) => {
            const selectedArea = e.target.value;
            setFilteredEvents(
              events.filter((event) => event.assetArea === selectedArea)
            );
          }}
        >
          <option value="">Area</option>
          {Array.from(new Set(events.map((event) => event.assetArea))).map(
            (area) => (
              <option key={area} value={area}>
                {area}
              </option>
            )
          )}
        </select>
        <div className="flex space-x-2">
          <select
            className="border p-2 rounded-md"
            onChange={(e) => {
              const isPublished = e.target.value === "Published" ? 1 : 0;
              setFilteredEvents(
                events.filter((event) => event.isPublish === isPublished)
              );
            }}
          >
            <option value="">All</option>
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>

          <select
            className="border p-2 rounded-md"
            onChange={(e) => {
              const selectedView = e.target.value.toLowerCase(); // 'dayGridMonth', 'timeGridWeek', 'timeGridDay'
              calendarRef.current.getApi().changeView(selectedView);
            }}
          >
            <option value="dayGridMonth">Month</option>
            <option value="timeGridWeek">Week</option>
            <option value="timeGridDay">Day</option>
          </select>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventDrop={handleEventDrop}
        editable={true}
        droppable={true}
        ref={calendarRef}
        initialDate={selectedDate}
        headerToolbar={false}
        height={500}
      />
    </div>
  );
};

export default MainCalendar;

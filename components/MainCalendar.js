import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CiLocationOn } from "react-icons/ci";

const MainCalendar = ({
  events,
  onEventDrop,
  selectedDate,
  setFilteredEvents,
  allEvents,
  calendarRef,
}) => {
  const handleDateClick = (arg) => {
    console.log(`Date clicked: ${arg.dateStr}`);
  };

  const handleEventDrop = (info) => {
    console.log("Event dropped on: ", info.event.start);
    if (onEventDrop) onEventDrop(info.event);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div
        className={`px-4 py-8 rounded-md border-2
          text-nowrap overflow-hidden w-full
          ${
            eventInfo.event._def?.extendedProps?.isPublish
              ? "bg-purple-50 border-purple-600"
              : "bg-yellow-100"
          }`}
        onClick={() =>
          console.log("Event clicked:", eventInfo.event?._def?.defId)
        }
      >
        <h3 className="font-bold text-md text-gray-600">
          {eventInfo.event._def?.defId} -{" "}
          {eventInfo.event._def?.extendedProps?.engineerName}
        </h3>
        <h3 className="text-md text-gray-600">
          €{" "}
          {eventInfo.event._def?.extendedProps?.totalPrice
            ? eventInfo.event._def?.extendedProps?.totalPrice
            : 0}{" "}
          <span
            className={`px-2 py-1 rounded-md ${
              eventInfo.event._def?.extendedProps?.isPublish
                ? "text-green-500"
                : "text-yellow-500"
            }`}
          >
            {eventInfo.event._def?.extendedProps?.isPublish
              ? "Paid"
              : "Pending"}
          </span>
        </h3>
        <div className="flex items-center space-x-2 text-md text-gray-600">
          <CiLocationOn />
          <p>
            {eventInfo.event._def?.extendedProps?.assetArea || "Unassigned"}
          </p>
        </div>
      </div>
    );
  };

  console.log("Events:", events);

  return (
    <div className="w-full p-4 border border-gray-300 rounded-md shadow-sm mt-4">
      {/* Dropdown Controls */}
      <div className="flex justify-between items-center mb-4">
        {/* Area Filter Dropdown */}
        <select
          className="border p-2 rounded-md"
          onChange={(e) => {
            const selectedArea = e.target.value;
            setFilteredEvents(
              selectedArea
                ? allEvents.filter((event) => event.assetArea === selectedArea)
                : allEvents // Reset to all events when 'All' is selected
            );
          }}
        >
          <option value="">All</option>
          {Array.from(new Set(allEvents?.map((event) => event.assetArea)))?.map(
            (area) => (
              <option key={area} value={area}>
                {area == null ? "Unassigned" : area}
              </option>
            )
          )}
        </select>

        {/* Date View Navigation */}
        <div className="flex space-x-5 items-center">
          <button
            className="px-4 py-2 bg-white shadow-md border border-gray-200 rounded-full text-gray-400"
            onClick={() => {
              calendarRef.current.getApi().prev();
            }}
          >
            {"<"}
          </button>
          <span className="text-md text-gray-600 uppercase">
            {selectedDate.toDateString()}
          </span>
          <button
            className="px-4 py-2 bg-white shadow-md border border-gray-200 rounded-full text-gray-400"
            onClick={() => {
              calendarRef.current.getApi().next();
            }}
          >
            {">"}
          </button>
        </div>

        {/* Publish Status Filter and View Selection */}
        <div className="flex space-x-2">
          <select
            className="border p-2 rounded-md"
            onChange={(e) => {
              const isPublished = e.target.value === "Published" ? 1 : 0;
              setFilteredEvents(
                allEvents.filter((event) => event.isPublish === isPublished)
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
              const selectedView = e.target.value; // Correct view value
              calendarRef.current.getApi().changeView(selectedView); // Use ref to change view
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
        height="auto"
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default MainCalendar;

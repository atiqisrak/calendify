import React from "react";

const EventCard = ({ event }) => {
  // Determine the background color based on the event status
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "border-purple-400 bg-purple-100 text-purple-700";
      case "pending":
        return "border-yellow-400 bg-yellow-100 text-yellow-700";
      case "provisional":
        return "border-gray-400 bg-gray-100 text-gray-700";
      case "pending assign":
        return "border-red-400 bg-red-100 text-red-700";
      default:
        return "border-gray-200 bg-white text-gray-700";
    }
  };

  return (
    <div
      className={`border-l-4 p-3 rounded-md shadow-sm ${getStatusClass(
        event.status
      )}`}
    >
      <h4 className="font-bold mb-1">
        {event.title} - {event.id}
      </h4>
      <p className="text-sm mb-1">
        {event.price ? `€${event.price} ${event.status}` : "N/A"}
      </p>
      <p className="text-xs text-gray-500">{event.location}</p>
    </div>
  );
};

export default EventCard;

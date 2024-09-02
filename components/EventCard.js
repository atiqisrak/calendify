import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="text-black flex space-x-2 align-middle border-b-4 py-3 border-gray-100">
      <input
        type="checkbox"
        className="mr-2"
        onChange={() => console.log("Checkbox clicked")}
      />
      <h4 className="font-bold mb-1">{event?.engineerName}</h4>
    </div>
  );
};

export default EventCard;

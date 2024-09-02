import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MiniCalendar = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Callback to update the main calendar
  };

  return (
    <div className="w-full my-4 flex justify-center">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="w-full rounded-lg shadow-md p-4"
        locale="en-US"
        tileClassName="p-1 hover:bg-gray-200 transition duration-150 rounded-md"
      />
    </div>
  );
};

export default MiniCalendar;

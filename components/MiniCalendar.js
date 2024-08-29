import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import { enUS } from "date-fns/locale"; // Import the specific locale from date-fns

const MiniCalendar = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Callback to update the main calendar
  };

  return (
    <div className="w-full p-4 border border-gray-300 rounded-md shadow-sm mt-4">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="w-full"
        locale="en-US" // Set the locale directly to 'en-US'
        tileClassName="p-1 hover:bg-gray-200 transition duration-150 rounded-md"
      />
    </div>
  );
};

export default MiniCalendar;

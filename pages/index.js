import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ClientList from "../components/ClientList";
import MiniCalendar from "../components/MiniCalendar";
import MainCalendar from "../components/MainCalendar";
import DragDropContextProvider from "../components/DragDropContextProvider";
import dummyData from "/public/data/data.json";

const HomePage = () => {
  const [clients, setClients] = useState(dummyData);
  const [filteredClients, setFilteredClients] = useState(clients);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState(dummyData);

  // Function to handle client selection
  const handleClientSelect = (clientId) => {
    const filtered = dummyData.filter((event) => event.client_id === clientId);
    setFilteredEvents(filtered);
  };

  // Function to handle date change from MiniCalendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(`Date selected: ${date}`);
  };

  // Function to handle event drop in MainCalendar
  const handleEventDrop = (event) => {
    console.log("Event dropped:", event);
    // Update event logic here and persist changes to local storage if needed
  };

  // Handle Drag and Drop
  const handleDragEnd = (result) => {
    if (!result.destination) return; // Exit if dropped outside any droppable area
    console.log("Dropped:", result);
    // Update events after drag and drop
  };

  return (
    <div className="flex flex-col items-start p-4 md:flex-row">
      <div className="w-full md:w-1/3">
        <MiniCalendar onDateChange={handleDateChange} />
        <SearchBar clients={clients} setFilteredClients={setFilteredClients} />
        <ClientList
          filteredClients={filteredClients}
          onClientSelect={handleClientSelect}
        />
        <DragDropContextProvider
          events={filteredEvents}
          onDragEnd={handleDragEnd}
        />
      </div>
      <div className="w-full md:w-2/3">
        <MainCalendar
          events={filteredEvents}
          onEventDrop={handleEventDrop}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
};

export default HomePage;

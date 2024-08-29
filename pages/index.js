// pages/index.js
import React, { useState } from "react";
import Tabs from "../components/Tabs";
import SearchBar from "../components/SearchBar";
import FilterList from "../components/FilterList";
import MiniCalendar from "../components/MiniCalendar";
import MainCalendar from "../components/MainCalendar";
import DragDropContextProvider from "../components/DragDropContextProvider";
import dummyData from "/public/data/data.json";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("Client");
  const [clients, setClients] = useState(dummyData);
  const [filteredClients, setFilteredClients] = useState(clients);
  const [selectedItems, setSelectedItems] = useState([]);
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
    if (!result.destination) return;
    console.log("Dropped:", result);
  };

  const toggleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((i) => i !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="flex flex-col items-start p-4 md:flex-row">
      <div className="w-full md:w-1/3">
        <MiniCalendar onDateChange={handleDateChange} />
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <SearchBar clients={clients} setFilteredClients={setFilteredClients} />
        <FilterList
          items={filteredClients}
          selectedItems={selectedItems}
          toggleSelectItem={toggleSelectItem}
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
          setFilteredEvents={setFilteredEvents}
          setFilteredClients={setFilteredClients}
          handleClientSelect={handleClientSelect}
        />
      </div>
    </div>
  );
};

export default HomePage;

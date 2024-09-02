import React, { useState, useRef } from "react";
import Tabs from "../components/Tabs";
import SearchBar from "../components/SearchBar";
import FilterList from "../components/FilterList";
import MiniCalendar from "../components/MiniCalendar";
import MainCalendar from "../components/MainCalendar";
import DragDropContextProvider from "../components/DragDropContextProvider";
import dummyData from "/public/data/data.json";
import Link from "next/link";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("Client");
  const [clients, setClients] = useState(dummyData);
  const [filteredClients, setFilteredClients] = useState(clients);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState(dummyData);

  // To control MainCalendar from MiniCalendar, Add a reference for MainCalendar
  const calendarRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Switch to day view and set the date in MainCalendar
    calendarRef.current?.getApi().changeView("timeGridDay");
    calendarRef.current?.getApi().gotoDate(date);
  };

  const handleEventDrop = (event) => {
    console.log("Event dropped:", event);
  };

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
    <div>
      <div className="flex flex-col items-start md:flex-row h-full">
        <div
          className="w-full md:w-1/4 pr-2 h-auto"
          style={{
            backgroundColor: "#f6f9fe",
          }}
        >
          <MiniCalendar onDateChange={handleDateChange} />
          <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <SearchBar
            clients={clients}
            setFilteredClients={setFilteredClients}
          />
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
        <div className="w-full md:w-3/4 pl-4">
          <MainCalendar
            events={filteredEvents}
            onEventDrop={handleEventDrop}
            selectedDate={selectedDate}
            setFilteredEvents={setFilteredEvents}
            setFilteredClients={setFilteredClients}
            allEvents={dummyData}
            calendarRef={calendarRef}
          />
        </div>
      </div>
      <footer className="text-center py-4 text-gray-600 w-full bg-white">
        <p>
          Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <Link
            href="https://github.com/atiqisrak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Atiq Israk
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

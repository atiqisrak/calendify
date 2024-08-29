import MiniCalendar from "../components/MiniCalendar";
import Calendar from "../components/Calendar";
import SearchBar from "../components/SearchBar";
import ClientList from "../components/ClientList";
import dummyData from "/public/data/data.json";
import { useState } from "react";

const HomePage = () => {
  const [clients, setClients] = useState(dummyData);
  const [filteredClients, setFilteredClients] = useState(clients);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClientSelect = (clientId) => {
    console.log(`Client selected: ${clientId}`);
    // Filter events based on selected client ID
  };

  // Function to handle date change from MiniCalendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(`Date selected: ${date}`);
    // Update the main calendar view to this date
  };

  return (
    <div className="flex flex-col items-start p-4 md:flex-row">
      <div className="w-full md:w-1/3">
        <SearchBar clients={clients} setFilteredClients={setFilteredClients} />
        <ClientList
          filteredClients={filteredClients}
          onClientSelect={handleClientSelect}
        />
        <MiniCalendar onDateChange={handleDateChange} />
      </div>
      {/* Other components like MiniCalendar, Calendar, etc. will go here */}
    </div>
  );
};

export default HomePage;

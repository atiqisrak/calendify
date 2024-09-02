import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ clients, setFilteredClients }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);

  // Focus on the search bar when Cmd+F is pressed
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.metaKey && event.key === "f") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredClients = clients.filter((client) =>
      client.clientName.toLowerCase().includes(query)
    );
    setFilteredClients(filteredClients);
  };

  // console.log("Clients:", clients);

  return (
    <div className="mb-4 px-4 py-2 flex items-center space-x-2 bg-gray-100 rounded-lg">
      <FaSearch className="text-gray-500" />

      <input
        type="text"
        placeholder="Search Engineer"
        value={searchQuery}
        onChange={handleSearch}
        ref={inputRef}
        className="w-full p-2 bg-gray-100 focus:outline-none focus:border-blue-400"
      />
      <button
        className="px-4 py-1 text-gray-800 bg-white rounded-lg shadow"
        onClick={() => inputRef?.current.focus()}
      >
        ⌘+F
      </button>
    </div>
  );
};

export default SearchBar;

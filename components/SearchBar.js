import React, { useState, useEffect, useRef } from "react";

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

  return (
    <div className="mb-4 p-2 flex justify-between">
      <input
        type="text"
        placeholder="Search Engineer... ⌘+F"
        value={searchQuery}
        onChange={handleSearch}
        ref={inputRef}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400"
      />
      {/* ⌘+F button */}
      <button
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md"
        onClick={() => inputRef.current.focus()}
      >
        ⌘+F
      </button>
    </div>
  );
};

export default SearchBar;

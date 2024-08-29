import React, { useState } from "react";

const SearchBar = ({ clients, setFilteredClients }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter clients based on the search query
    const filteredClients = clients.filter((client) =>
      client.clientName.toLowerCase().includes(query)
    );

    // Update the filtered clients in the parent component
    setFilteredClients(filteredClients);
  };

  return (
    <div className="mb-4 p-2">
      <input
        type="text"
        placeholder="Search Client..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default SearchBar;

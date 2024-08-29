import React from "react";

const ClientList = ({ filteredClients, onClientSelect }) => {
  return (
    <div className="mt-4 p-2 border border-gray-300 rounded-md max-h-80 overflow-y-auto shadow-sm">
      {filteredClients.length > 0 ? (
        filteredClients.map((client, index) => (
          <div
            key={`${client.client_id}-${index}`} // Use combination of client_id and index for unique keys
            className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition duration-200"
            onClick={() => onClientSelect(client.client_id)}
          >
            <span className="text-lg font-medium">{client.clientName}</span>
          </div>
        ))
      ) : (
        <p className="p-2 text-gray-500">No clients found.</p>
      )}
    </div>
  );
};

export default ClientList;

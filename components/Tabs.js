import React, { useState } from "react";

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["Client", "Job", "Employee"];

  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-md ${
            selectedTab === tab
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

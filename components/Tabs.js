import React, { useState } from "react";

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["Client", "Job", "Employee"];

  return (
    <div className="flex justify-between my-2 bg-white py-1">
      {tabs?.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-md w-1/3 ${
            selectedTab === tab
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
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

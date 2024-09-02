import React from "react";

const FilterList = ({ items, selectedItems, toggleSelectItem }) => {
  return (
    <div className="mb-4">
      {items?.map((item) =>
        item?.name ? (
          <div key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => toggleSelectItem(item.id)}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">{item?.name}</span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default FilterList;

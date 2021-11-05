import React from "react";

export const TextFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
      />
    </span>
  );
};

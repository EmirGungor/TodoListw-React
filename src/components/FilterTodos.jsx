/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const FilterTodos = ({ filterText, setFilterText }) => {
  return (
    <div className="filter">
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="filter-input"
        type="text"
        placeholder="Filter Todos"
      />
    </div>
  );
};

export default FilterTodos;

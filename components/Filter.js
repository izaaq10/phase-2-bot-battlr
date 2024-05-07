import React from "react";
const allClasses = [
  "All",
  "Assault",
  "Defender",
  "Support",
  "Medic",
  "Witch",
  "Captain",
];

function Filter({
  selectedCategory,
  onFilterChange,
  selectedSort,
  onSortChange,
}) {
  return (
    <div className=" custom-container">
      <div className=" custom-select">
        <i class="filter icon large"></i>
        <span class="ui header">Filter </span>
        <select
          className="custom-dropdown"
          multiple=""
          value={selectedCategory}
          onChange={(event) => onFilterChange(event)}>
          {allClasses.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="custom-select">
        <i className="sort icon large"></i>
        <span className="ui header">Sort </span>
        <select
          className=" custom-dropdown"
          value={selectedSort}
          onChange={(e) => onSortChange(e)}>
          <option value="All">All</option>
          <option value="Health">Health</option>
          <option value="Damage">Damage</option>
          <option value="Armor">Armor</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
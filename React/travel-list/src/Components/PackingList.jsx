import { useState } from "react";
import Item from "../Components/Item";

export default function PackingList({
  items,
  handleDeleteItem,
  handleUpdateItems,
  handleReset,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="bg-yellow-900 h-full sm:px-4 flex flex-col justify-between py-8 gap-6">
      <ul className="flex flex-wrap gap-10 font-semibold text-xl bg-yellow-900 text-white p-4">
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItems={handleUpdateItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="w-full flex items-center md:flex-row flex-col justify-center gap-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="max-w-[300px]  rounded-md bg-orange-200 border focus:border-black h-[34px]"
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button
          onClick={handleReset}
          className="px-6 rounded-md bg-orange-200 border focus:border-black h-[34px]"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

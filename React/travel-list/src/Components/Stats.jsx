import items from "../App";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="flex items-center justify-center w-full text-center bg-sky-600 h-10">
        <em className="text-white">Start Adding your items.</em>
      </footer>
    );
  }

  const totalItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const itemsPercentage = Math.round((itemsPacked / totalItems) * 100);
  return (
    <footer className="flex items-center justify-center w-full text-center bg-sky-600 h-10">
      <em className="text-white">
        {itemsPercentage === 100
          ? "You are ready to go!!"
          : `You have ${totalItems} items on your list, and you already packed
          ${itemsPacked} items (${itemsPercentage}%)`}
      </em>
    </footer>
  );
}

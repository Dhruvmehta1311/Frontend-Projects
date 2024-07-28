import item from "./PackingList";

export default function Item({ item, handleDeleteItem, handleUpdateItems }) {
  return (
    <li className="font-semibold flex gap-2">
      <input
        type="checkbox"
        className="w-4"
        value={item.packed}
        onChange={() => {
          handleUpdateItems(item.id);
        }}
      />
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

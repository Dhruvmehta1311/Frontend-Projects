import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex sm:flex-row flex-col gap-4 py-4 px-4 sm:gap-4 bg-orange-600 items-center justify-between"
    >
      <h3 className="text-center font-semibold text-lg sm:text-2xl bg-orange-600 text-white">
        What stuffs do you need for Trip ?
      </h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(Number(e.target.value));
        }}
        className="h-[44px] bg-orange-100 w-[80px] rounded-full text-center font-semibold"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => {
          // console.log(e);
          // console.log(e.target.value);
          setDescription(e.target.value.trim());
        }}
        value={description}
        type="text"
        placeholder="Enter item..."
        className="h-[38px] w-full sm:w-[300px] rounded-md bg-orange-100 px-4"
      />
      <button className="h-[38px] px-4 rounded-md w-full sm:w-[300px] border bg-orange-200">
        Add
      </button>
    </form>
  );
}

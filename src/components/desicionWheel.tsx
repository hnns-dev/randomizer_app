import React, { useState, FormEvent } from "react";
import WheelItem from "./wheelItem";

export default function DecisionWheel(): JSX.Element {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const createWheelItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const deleteWheelItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="w-4/5 bg-red-300/80 rounded-xl shadow-lg p-10 mt-10 flex flex-col lg:grid-flow-row items-center justify-center gap-5">
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <div className="rounded-full flex flex-grow aspect-square w-56 bg-red_800 shadow-md mb-5"></div>
        <div className="bg-red_300 rounded-lg p-5 flex flex-col w-1/2 flex-grow justify-between">
          <ul className="flex flex-wrap mb-5">
            {items.map((item, index) => (
              <WheelItem
                key={index}
                text={item}
                onDelete={() => deleteWheelItem(index)}
              />
            ))}
          </ul>
          <form onSubmit={createWheelItem}>
            <input
              type="text"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
              placeholder="add item"
              className="bg-red_200 border-2 border-red_300 font-main text-red_900 rounded-full px-3 py-1 focus:outline-none focus:border-red_200 w-full"
            />
          </form>
        </div>
      </div>
      <button className="bg-gold hover:scale-105 transform text-red_900 text-xl font-headline py-2 px-4 rounded-lg">
        Spin Wheel
      </button>
    </div>
  );
}

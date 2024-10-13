import React, { useState } from "react";

export default function RandomNumber() {
  const [min, setMin] = useState<number | string>(0);
  const [max, setMax] = useState<number | string>(0);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [minFocused, setMinFocused] = useState(false);
  const [maxFocused, setMaxFocused] = useState(false);

  const generateRandomNumber = () => {
    const minNum = typeof min === "string" ? parseInt(min) || 0 : min;
    const maxNum = typeof max === "string" ? parseInt(max) || 0 : max;

    if (minNum <= maxNum) {
      const randomNum =
        Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setRandomNumber(randomNum);
    } else {
      alert("Minimum must be smaller than Maximum.");
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<number | string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setter(value === "" ? "" : parseInt(value) || 0);
    };

  const handleInputFocus =
    (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setter(true);
    };

  const handleInputBlur =
    (
      setter: React.Dispatch<React.SetStateAction<boolean>>,
      valueSetter: React.Dispatch<React.SetStateAction<number | string>>
    ) =>
    () => {
      setter(false);
      valueSetter((prev) => (prev === "" ? 0 : prev));
    };

  return (
    <div className="w-4/5 bg-red-300/80 rounded-xl shadow-lg p-10 mt-10 flex flex-col items-center justify-center gap-10">
      <div className="flex gap-5 flex-wrap">
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="min-input"
            className="block mb-2 text-lg font-headline text-red-900"
          >
            Minimum:
          </label>
          <input
            type="number"
            id="min-input"
            value={minFocused && min === 0 ? "" : min}
            onChange={handleInputChange(setMin)}
            onFocus={handleInputFocus(setMinFocused)}
            onBlur={handleInputBlur(setMinFocused, setMin)}
            className="bg-red_300 border-2 border-red_300 font-main text-red_900 text-2xl rounded-lg block p-2.5 focus:outline-none focus:border-red_200"
            required
          />
        </form>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="max-input"
            className="block mb-2 text-lg font-headline text-red_900"
          >
            Maximum:
          </label>
          <input
            type="number"
            id="max-input"
            value={maxFocused && max === 0 ? "" : max}
            onChange={handleInputChange(setMax)}
            onFocus={handleInputFocus(setMaxFocused)}
            onBlur={handleInputBlur(setMaxFocused, setMax)}
            className="bg-red_300 border-2 border-red_300 font-main text-red_900 text-2xl rounded-lg block p-2.5 focus:outline-none focus:border-red_200"
            required
          />
        </form>
      </div>
      <div className="bg-red_300 w-4/5 text-5xl text-center font-headline text-red_900 rounded-lg py-5">
        {randomNumber !== null ? randomNumber : "-"}
      </div>
      <button
        onClick={generateRandomNumber}
        className="bg-gold hover:scale-105 transform text-red_900 text-xl font-headline py-2 px-4 rounded-lg"
      >
        Create Number
      </button>
    </div>
  );
}

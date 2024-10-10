import React from "react";

export default function RandomNumber() {
  return (
    <div className="w-4/5 bg-red_300/80 rounded-xl shadow-lg p-10 mt-10 flex flex-col items-center justify-center gap-10">
      <div className="flex gap-10">
        <form className="max-w-sm mx-auto">
          <label
            typeof="number-input"
            className="block mb-2 text-lg font-headline text-red_900"
          >
            Minimum:
          </label>
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            className="bg-red_300 border-2 border-red_300 font-main text-red_900 text-2xl rounded-lg block p-2.5 focus:outline-none focus:border-red_200"
            placeholder=""
            required
          />
        </form>
        <form className="max-w-sm mx-auto">
          <label
            typeof="number-input"
            className="block mb-2 text-lg font-headline text-red_900"
          >
            Maximum:
          </label>
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            className="bg-red_300 border-2 border-red_300 font-main text-red_900 text-2xl rounded-lg block p-2.5 focus:outline-none focus:border-red_200"
            placeholder=""
            required
          />
        </form>
      </div>
      <div className="bg-red_300 w-4/5 text-5xl text-center font-headline text-red_900 rounded-lg py-5">
        550
      </div>
    </div>
  );
}

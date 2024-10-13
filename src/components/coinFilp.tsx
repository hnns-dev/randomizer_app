import React, { useState } from "react";

export default function CoinFlip() {
  const [result, setResult] = useState<"Heads" | "Tails" | null>(null);

  function coinFlip() {
    const flipResult = Math.random() < 0.5 ? "Heads" : "Tails";
    setResult(flipResult);
    console.log(`Der Münzwurf ergab: ${flipResult}`);
  }

  return (
    <div className="w-4/5 bg-red-300/80 rounded-xl shadow-lg p-10 mt-10 flex flex-col items-center justify-center gap-5">
      <img src="img/coin.svg" alt="coin" className="h-40" />
      <p className="font-headline text-xl text-red_900 mb-5">
        Heads or Tails, what's it gonna be?
      </p>
      <div className="bg-red_300 text-5xl font-headline text-red_900 rounded-lg p-5 w-4/5 text-center">
        <p>{result || "Flip the coin!"}</p>
      </div>
      <button
        className="bg-gold hover:scale-105 transform text-red_900 text-xl font-headline py-2 px-4 rounded-lg"
        onClick={coinFlip}
      >
        Flip the Coin
      </button>
    </div>
  );
}

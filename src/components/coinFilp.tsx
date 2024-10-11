import React from "react";

export default function CoinFilp() {
  return (
    <div className="w-4/5 bg-red-300/80 rounded-xl shadow-lg p-10 mt-10 flex flex-col items-center justify-center gap-10">
      <img src="img/coin.svg" alt="coin" className="h-40" />
      <p className="font-headline text-xl text-red_900 mb-5">
        Heads or Tails, what's it gonna be?
      </p>
      <button className="bg-gold hover:scale-105 transform text-red_900 text-xl font-headline py-2 px-4 rounded-lg">
        Flip the Coin
      </button>
    </div>
  );
}

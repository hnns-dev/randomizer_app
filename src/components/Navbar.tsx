import React from "react";

export default function navbar() {
  return (
    <div className="border-red-800 text-red-800 font- border-2 h-10 w-full margin-5 rounded-lg p-3 flex justify-around items-center">
      <a href="#">
        <p>Random Number</p>
      </a>
      <a href="#">
        <p>Coin Flip</p>
      </a>
      <a href="#">
        <p>Decision Wheel</p>
      </a>
    </div>
  );
}

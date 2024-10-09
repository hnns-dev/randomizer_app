import React from "react";

export default function navbar() {
  return (
    <div className="border-red-800 border-2 h-10 w-full margin-5 rounded-lg p-3 flex flex-row justify-between">
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

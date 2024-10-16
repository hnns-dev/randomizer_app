import React from "react";

export default function () {
  return (
    <div className="w-4/5 bg-red_300/80 rounded-xl shadow-lg p-10 mt-10 flex flex-col lg:flex-row items-center justify-center gap-5">
      <div className="font-headline text-2xl text-red_800 bg-red_300 p-5 rounded-lg">
        {" "}
        *********{" "}
      </div>
      <button className="bg-gold hover:scale-105 transform text-red_900 text-xl font-headline py-2 px-4 rounded-lg">
        Generate Password
      </button>
    </div>
  );
}

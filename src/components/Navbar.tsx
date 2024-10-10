çexport default function navbar() {
  return (
    <div className="text-red_400 bg-red_400/20 sm:text-xs md:text-xl lg:text-2xl  font-headline shadow-lg h-10 w-4/5 rounded-full p-3 flex justify-around items-center">
      <a href="#">
        <p className="hover:text-red_300 hover:scale-110 transform">
          Random Number
        </p>
      </a>
      <a href="#">
        <p className="hover:text-red_300 hover:scale-110 transform">
          Coin Flip
        </p>
      </a>
      <a href="#">
        <p className="hover:text-red_300 hover:scale-110 transform">
          Decision Wheel
        </p>
      </a>
    </div>
  );
}

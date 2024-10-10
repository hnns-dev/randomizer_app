import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="mt-4 flex items-center justify-center text-red_400 bg-red_400/20 sm:text-xs md:text-xl lg:text-2xl font-headline shadow-lg h-10 max-w-4/5 rounded-full py-3 px-10">
      <ul className="flex gap-10">
        <li>
          <Link className="hover:text-red_300 hover:scale-110 transform" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red_300 hover:scale-110 transform"
            to="/random-number"
          >
            Random Number
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red_300 hover:scale-110 transform"
            to="/coin-flip"
          >
            Coin Flip
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red_300 hover:scale-110 transform"
            to="/decision-wheel"
          >
            Decision Wheel
          </Link>
        </li>
      </ul>
    </nav>
  );
}

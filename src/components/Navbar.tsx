import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex w-4/5 py-5">
      <div className="w-full overflow-x-scroll bg-red_400/20 rounded-full shadow-lg">
        <div className="flex gap-10 items-center md:justify-center text-red_400 text-nowrap lg:text-2xl font-headline p-5 whitespace-nowrap">
          <Link className="hover:text-red_300 hover:scale-110 transform" to="/">
            Home
          </Link>
          <Link
            className="hover:text-red_300 hover:scale-110 transform"
            to="/random-number"
          >
            Random Number
          </Link>
          <Link
            className="hover:text-red_300 hover:scale-110 transform"
            to="/coin-flip"
          >
            Coin Flip
          </Link>
          <Link
            className="hover:text-red_300 hover:scale-110 transform "
            to="/decision-wheel"
          >
            Decision Wheel
          </Link>
          <Link
            className="hover:text-red_300 hover:scale-110 transform pr-5"
            to="#"
          >
            Password Generator
          </Link>
        </div>
      </div>
    </div>
  );
}

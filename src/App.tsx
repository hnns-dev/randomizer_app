import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import RandomNumber from "./components/RandomNumber";
import CoinFilp from "./components/CoinFilp";
import DecisionWheel from "./components/desicionWheel";

function Placeholder() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/*SVG einfügen */}
      <svg
        className="animate-spin h-10 w-10 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v4m0 4v4m-4-4h4m4 0h4"
        />
      </svg>
      <p className="ml-4 text-primary">
        Welcome to Randomizer! Select an option above.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-full bg-red_800 flex flex-col items-center">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red_400 m-10">
          Randomizer
        </h1>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Placeholder />} />
            <Route path="/random-number" element={<RandomNumber />} />
            <Route path="/coin-flip" element={<CoinFilp />} />
            <Route path="/decision-wheel" element={<DecisionWheel />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

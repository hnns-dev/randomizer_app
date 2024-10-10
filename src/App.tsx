import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen min-w-full bg-red_800 flex flex-col items-center">
      <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red_400 m-10">
        Randomizer
      </h1>
      <Navbar />
      <p className="font-main text-red_950 md:lg:text-md lg:text-xl mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel
        impedit ducimus, quidem ab nemo odit totam quae sequi blanditiis?
      </p>
    </div>
  );
}

export default App;

import About from "./components/custom/About";
import Home from "./components/custom/Home";
import Navbar from "./components/custom/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-center">
     <Navbar/>
     <Home />
     <About />
    </div>
  );
}

export default App;

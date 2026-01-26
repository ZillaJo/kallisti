import About from "./components/custom/About";
import Home from "./components/custom/Home";
import Navbar from "./components/custom/Navbar";
import Realisation from "./components/custom/Realisation";
import Services from "./components/custom/Services";
import Contact from "./components/custom/Contact";
import Footer from "./components/custom/Footer";

function App() {
  return (
    <div>
     <Navbar/>
     <Home />
     <About />
     <Services />
     <Realisation />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;

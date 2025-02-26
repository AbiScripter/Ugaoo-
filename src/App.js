import About from "./components/About";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[375px] w-full mx-auto  text-white h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Footer />
    </div>
  );
}

export default App;

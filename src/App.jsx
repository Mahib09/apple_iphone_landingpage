import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Camera from "./components/Camera";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Camera />
      <Footer />
      <div className="bg-zinc text-center">
        This is solely a learning exercise that I did recreating Apple{"'"}s
        iPhone 15 Pro landing page. - Mahib
      </div>
    </main>
  );
};

export default App;

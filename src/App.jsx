import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar/>
      <Hero title="Empowering Young Minds"
      title2="Building Brighter Futures"
      description="Creating opportunities through education, mentorship and community support."
      />
      <About/>
      <Mission/>
      <Stats/>
      <Programs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from 'react-progressbar-on-scroll'

function App() {
  return (
    <>
    <ProgressBar
    color="#7D79F2"
    height={2}
    gradient={true}
    gradientColor="#4429F2"
    />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

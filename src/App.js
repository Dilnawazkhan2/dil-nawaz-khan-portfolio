import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Contact from "./components/Contact";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <WhyWorkWithMe />
      <Contact />
    </ThemeProvider>
  );
}

export default App;

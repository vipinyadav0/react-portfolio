import { Header } from "./components/Header/Header";
import { HeroArea } from "./components/HeroArea/HeroArea";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contact";
import { Footer } from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="sticky"><Header /></div>
      <HeroArea />
      <h1 id="about" className="title">
        About me
      </h1>
      <About />
      <h1 id="services" className="title">
        My Passion
      </h1>
      <p className="description">How can I help you?</p>
      <Services />
      <h1 id="projects" className="title">
        Projects
      </h1>
      <p className="description">Highlights of my best work</p>
      <Projects />
      <h1 id="skills" className="title">
        Skills
      </h1>
      <Skills />
      <h1 id="contact" className="title">
        Let's build something great!
      </h1>
      <p className="description">Connect with me</p>
      <Contacts />
      <Footer />
    </div>
  );
}

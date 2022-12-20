import { Header } from "./components/Header/Header";
import { HeroArea } from "./components/HeroArea/HeroArea";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contact";
import { Footer } from "./components/Footer/Footer";
import { Certificates } from "./components/Certificates/Certificates"
import Skills from "./components/Skills/Skills";

import "./index.css";

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
        My services
      </h1>
      <p className="description">How can I help you</p>
      <Services />
      <h1 id="projects" className="title">
        Projects
      </h1>
      <p className="description">Highlights of my best work</p>
      <Projects />
      <h1 id="certificates" className="title">
        Certificates
      </h1>
      <p className="description">Certifications</p>
      <Certificates />
      <h1 id="skills" className="title">
        Skills
      </h1>
      <Skills />
      <h1 id="contact" className="title">
        Let's connect
      </h1>
      <p className="description">I'm available to work!</p>
      <Contacts />
      <Footer />
    </div>
  );
}

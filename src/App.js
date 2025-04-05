
import { BrowserRouter } from "react-router-dom";
import DrawerAppBar from "./components/NavBar/DrawerAppBar";
import { Element } from "react-scroll";
import { Inicio } from "./components/Inicio/Inicio";
import { About } from "./components/About/About";

import { Experience } from "./components/Experience/Experience";
import { Services } from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";
import { Portafolio } from "./components/Portafolio/Portafolio";

import { PrimeReactProvider } from "primereact/api";
function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <div>
          <DrawerAppBar />
          <Element name="home">
            <Inicio />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="projects">
            <Portafolio />
          </Element>
          <Element name="services">
            <Services />
          </Element>
          <Element name="contact">
            <Contacts />
          </Element>
        </div>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;

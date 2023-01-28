import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Newsletter from "./Components/NewsLetter/newsletter";
import Projects from "./Components/Projects/projects";
import Skills from "./Components/Skills/skills";
import Contact from "./Contact/contact";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

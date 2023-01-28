import Tab1 from "../Tab1/tab1";
import "./projects.css";
import { useState } from "react";
import Tab2 from "../Tab2/tab2";
import Tab3 from "../Tab3/tab3";

function Projects() {
  const [tabs, setTabs] = useState("Tab1");
  return (
    <section id="project" className="container ">
      <div className="project__one">
        <h2>Projects</h2>
        <h4 className="project__two">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          dicta repellat animi omnis itaque numquam esse aut fuga modi, iure
          ullam eos, neque molestias amet error nostrum ipsa tenetur tempore
          aspernatur exercitationem? Iusto, minus non.
        </h4>
        <div className="project__three">
          <h3
            className={tabs == "Tab1" ? "active" : ""}
            onClick={() => setTabs("Tab1")}
          >
            Tab1
          </h3>
          <h3
            className={tabs == "Tab2" ? "active" : ""}
            onClick={() => setTabs("Tab2")}
          >
            Tab2
          </h3>
          <h3
            className={tabs == "Tab3" ? "active" : ""}
            onClick={() => setTabs("Tab3")}
          >
            Tab3
          </h3>
        </div>
        <div>{tabs == "Tab1" ? <Tab1 /> : ""}</div>
        <div>{tabs == "Tab2" ? <Tab2 /> : ""}</div>
        <div>{tabs == "Tab3" ? <Tab3 /> : ""}</div>
      </div>
    </section>
  );
}

export default Projects;

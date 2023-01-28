import "./header.css";
import Nav from "../Nav/nav";
import image from "../../Images/header-img.svg";
import Typed from "react-typed";
import { BsArrowRightCircle } from "react-icons/bs";

function Header() {
  return (
    <div className="header__contain">
      <div className="container header__one">
        <Nav />
        <header className="header__two">
          <div className="header__three">
            <h3>Welcome to my Portfolio</h3>
            <h1>Hi! I'm Judy</h1>
            <span>
              <Typed
                strings={[
                  "Web Designer",
                  "Web Developer",
                  "Content Creator",
                  "Cloud Engineer",
                ]}
                typeSpeed={100}
                loop
              />
            </span>
            <br />
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              veritatis. Veniam, perferendis incidunt doloremque aperiam at
              necessitatibus iure unde architecto excepturi ipsam provident
              doloribus! Ad voluptas, sapiente saepe vitae quod necessitatibus
              odit voluptatibus repudiandae iusto amet, quibusdam voluptates,
              laudantium reiciendis?
            </small>
            <div className="btn header__five">
              <a href="">Let's Connect</a>
              <BsArrowRightCircle />
            </div>
          </div>
          <div className="header__four">
            <img src={image} alt="" />
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;

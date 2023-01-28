import "./nav.css";
import logo from "../../Images/logo.svg";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

function Nav() {
  const [showNav, setShowNav] = useState(true);
  return (
    <nav className="nav__one">
      <h2>LOGO</h2>
      <div className="nav__two">
        <div className="nav__three">
          <div
            onClick={() => setShowNav((prev) => !prev)}
            className="nav__seven"
          >
            {showNav ? <FiMenu /> : <VscChromeClose />}
          </div>
          <div className={`nav__eight ${showNav ? "moveout" : "nav__eight"}`}>
            <div className="nav__four">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#skill">Skills</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
              </ul>
            </div>
            <div className="nav__five">
              <a href="www.linkedin.com/in/suleiman-abubakar-601b6925b">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/SoolaimanG">
                <FaGithub />
              </a>
              <a href="https://instagram.com/soolaiman.g?igshid=YmMyMTA2M2Y=">
                {" "}
                <FaInstagram />
              </a>
            </div>
            <div className="nav__six">
              <a className="btn" href="#contact">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__one container">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="footer__two">
          <div className="footer__three">
            <div>
              <FaGithub />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
          </div>
          <h4>Copyright 2022. All Right Reserved</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

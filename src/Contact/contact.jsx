import "./contact.css";
import image from "../Images/contact-img.svg";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useEffect } from "react";

function Contact() {
  const form = useRef();
  const [send, setSend] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();
    setSend("Sent");
    emailjs
      .sendForm(
        "service_8hrzmra",
        "template_1rkdbwr",
        form.current,
        "8O1myACtmeotPt_AL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    setTimeout(() => {
      setSend("Send");
    }, 2000);
  }, [send]);
  return (
    <div id="contact" className="contact__one">
      <div className="contact__zero container">
        <div className="contact__two">
          <img src={image} alt="" />
        </div>
        <div className="contact__three">
          <h1>Get In Touch</h1>
          <form ref={form} action="">
            <label className="conatct__four">
              <input
                required
                name="fname"
                placeholder="First Name"
                type="text"
              />
              <input
                required
                name="sname"
                placeholder="Last Name"
                type="text"
              />
            </label>
            <label className="conatct__four">
              <input
                required
                name="email"
                placeholder="Email Address"
                type="text"
              />
              <input
                required
                name="phoneno"
                placeholder="Phone No."
                type="text"
              />
            </label>
            <textarea
              required
              placeholder="Message"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={sendEmail} className="btn__zero">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>{send}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

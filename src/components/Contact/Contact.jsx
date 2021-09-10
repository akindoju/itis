import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="contact" id="contact">
        <div className="contact__image">
          <img
            src="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Contact"
          />
        </div>

        <div className="contact__form">
          <h1 className="contact__form--heading">Contact Us</h1>

          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea
            name="message"
            placeholder="How can we help :)?"
            cols="30"
            rows="10"
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

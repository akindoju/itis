import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__image">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80"
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
  );
};

export default Contact;

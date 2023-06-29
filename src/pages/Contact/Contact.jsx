import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Footer from "../../Components/Footer/Footer";
import MapContainer from "../../Components/MapContainer/MapContainer";
import "./Contact.scss";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailFailed, setIsEmailFailed] = useState(false);

  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name should be at least 2 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    message: Yup.string()
      .min(2, "Your message should be at least 2 characters")
      .required("Your message is required"),
  });

  return (
    <div className="contact">
      <div className="contact__heading" />

      <div className="contact__main">
        <div className="contact__main--info">
          <div className="contact__main--info-item">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>Location</title>
              <path d="M12 2.016v0q-1.453 0-2.719 0.539t-2.227 1.5-1.5 2.227-0.539 2.719q0 1.313 0.352 2.531t1.055 2.297q0.703 1.172 1.57 2.203t1.57 2.203q0.375 0.563 0.633 1.102t0.539 1.148q0.141 0.281 0.281 0.633t0.375 0.609 0.609 0.258v0q0.375 0 0.609-0.258t0.375-0.609 0.281-0.633q0.281-0.609 0.539-1.148t0.633-1.102q0.703-1.125 1.57-2.18t1.57-2.227q0.703-1.078 1.055-2.297t0.352-2.531q0-1.453-0.539-2.719t-1.5-2.227-2.227-1.5-2.719-0.539zM12 11.766q-1.031 0-1.758-0.75t-0.727-1.781 0.727-1.758 1.758-0.727 1.758 0.727 0.727 1.758-0.727 1.781-1.758 0.75z"></path>
            </svg>

            <p> Abuja, Nigeria.</p>
          </div>

          <div className="contact__main--info-item">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>Phone</title>
              <path d="M17.256 12.253c-0.096-0.667-0.611-1.187-1.274-1.342-2.577-0.604-3.223-2.088-3.332-3.734-0.457-0.085-1.27-0.177-2.65-0.177s-2.193 0.092-2.65 0.177c-0.109 1.646-0.755 3.13-3.332 3.734-0.663 0.156-1.178 0.675-1.274 1.342l-0.497 3.442c-0.175 1.212 0.715 2.305 1.953 2.305h11.6c1.237 0 2.128-1.093 1.953-2.305l-0.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5 2.526 1.12 2.526 2.5-1.132 2.5-2.526 2.5zM19.95 6c-0.024-1.5-3.842-3.999-9.95-4-6.109 0.001-9.927 2.5-9.95 4s0.021 3.452 2.535 3.127c2.941-0.381 2.76-1.408 2.76-2.876 0-1.024 2.392-1.271 4.655-1.271s4.654 0.247 4.655 1.271c0 1.468-0.181 2.495 2.76 2.876 2.513 0.325 2.558-1.627 2.535-3.127z"></path>
            </svg>

            <p>+234 (810) 946-9782</p>
          </div>

          <div className="contact__main--info-item">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>email</title>
              <path d="M16.015 18.861l-4.072-3.343-8.862 10.463h25.876l-8.863-10.567-4.079 3.447zM29.926 6.019h-27.815l13.908 11.698 13.907-11.698zM20.705 14.887l9.291 11.084v-18.952l-9.291 7.868zM2.004 7.019v18.952l9.291-11.084-9.291-7.868z"></path>
            </svg>

            <Link to="mailto:davidd.akindoju@gmail.com" target="_blank">
              davidd.akindoju@gmail.com
            </Link>
          </div>
        </div>

        <p className="contact__main--divider">Or, write to us directly...</p>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validateSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            const data = {
              name: values.name,
              email: values.email,
              source: "https://itis.netlify.app",
              message: values.message,
            };

            emailjs.send("service_vvu3zrl", "template_molc9ut", data).then(
              (result) => {
                if (result.text === "OK") {
                  setIsEmailSent(true);
                  resetForm();

                  const timeout = setTimeout(() => {
                    setIsEmailSent(false);
                  }, 2000);

                  return () => clearTimeout(timeout);
                }
              },
              () => {
                setIsEmailFailed(true);
              }
            );
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
            errors,
          }) => {
            return (
              <form onSubmit={handleSubmit} ref={form}>
                <div className="contact__main--form">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    required
                  />

                  <p className="errMsg">
                    {errors.name && touched.name ? errors.name : ""}
                  </p>
                </div>

                <div className="contact__main--form-input">
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                  />

                  <p className="errMsg">
                    {errors.email && touched.email ? errors.email : ""}
                  </p>
                </div>

                <div className="contact__main--form-input">
                  <textarea
                    name="message"
                    placeholder="How can we help :)?"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    required
                  />
                  {errors.message && touched.message ? (
                    <h3 className="errMsg">{errors.message}</h3>
                  ) : (
                    <div className="errMsg" />
                  )}
                  <button type="submit">Send</button>

                  {!isEmailSent ? (
                    <p className="sentEmail">Email Successfully sent</p>
                  ) : isEmailFailed ? (
                    <p className="errMsg">Oops, something went wrong</p>
                  ) : null}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>

      <MapContainer />
      <Footer />
    </div>
  );
};

export default Contact;

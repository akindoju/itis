import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MapContainer from "../../components/MapContainer/MapContainer";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import "./Contact.scss";
import axios from "axios";

const Contact = ({ setIsNotAtTop, isNotAtTop }) => {
  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name should be at least 2 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    message: Yup.string()
      .min(2, "Your message should be at least 2 characters")
      .required("Your message is required"),
  });

  const settingScrollTopBtn = () => {
    window.scrollY > 150 ? setIsNotAtTop(true) : setIsNotAtTop(false);
  };

  window.addEventListener("scroll", settingScrollTopBtn);

  const errMessage = (errors, credential) => {
    return <h3>{errors.credential}</h3>;
  };

  return (
    <div>
      {isNotAtTop && <ScrollTopBtn />}
      <NavBar />
      <div className="contact" id="top">
        <div className="contact__intro--image" />

        <div className="contact__info">
          <h1>Store Information</h1>

          <div className="contact__info--items">
            <div className="contact__info--items--container">
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

              <p>Akindoju Complex,</p>
              <p> Abuja, Nigeria.</p>
            </div>

            <div className="contact__info--items--container">
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

              <p>Call us:</p>
              <p>+2348123456789</p>
            </div>

            <div className="contact__info--items--container">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>Email</title>
                <path d="M18 2c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12c0-1.1 0.9-2 2-2h16zM13.63 11.1l6.37 4.9v-2l-5.12-3.9 5.12-4.1v-2l-10 8-10-8v2l5.12 4.1-5.12 3.9v2l6.37-4.9 3.63 2.9 3.63-2.9z"></path>
              </svg>

              <p>Email us:</p>
              <a href="mailto:davidd.akindoju@gmail.com">
                davidd.akindoju@gmail.com
              </a>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validateSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              // const { data } = await axios.post("https://");
            } catch (error) {
              console.log(error);
              setSubmitting(false);
            }

            setSubmitting(false);
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
            errors,
            // isSubmitting,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="contact__form">
                  <h1 className="contact__form--heading">Contact Us</h1>

                  <div className="contact__form--input">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      required
                    />
                    {errors.name && touched.name ? (
                      <h3 className="errMsg">{errors.name}</h3>
                    ) : null}
                  </div>

                  <div className="contact__form--input">
                    <input
                      name="email"
                      type="text"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required
                    />
                    {errors.email && touched.email ? (
                      <h3 className="errMsg">{errors.email}</h3>
                    ) : null}
                  </div>

                  <div className="contact__form--input">
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
                    ) : null}
                    <button>Send</button>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>

        <MapContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import useOutsideAlerter from "../OutsideAlerter/useOutsideAlerter";
import "./AuthModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../Redux/slices/userSlice";
import Loader from "../Loader/Loader";
import * as Yup from "yup";
import { Formik } from "formik";

const AuthModal = ({ setIsAuthClicked, authIconRef }) => {
  const wrapperRef = useRef(null);
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  useOutsideAlerter(wrapperRef, () => setIsAuthClicked(false), authIconRef);
  const dispatch = useDispatch();

  const errorMsg = useSelector((state) => state.user.error);

  const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email Address is required"),
    password: Yup.string()
      .min(6, "Your password should be at least 6 characters")
      .required("Your password is required"),
  });

  const registerValidation = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Name should be at least 2 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Email Address is required"),
    password: Yup.string()
      .min(6, "Your password should be at least 6 characters")
      .required("Your password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <div className="overlay">
      <div className="authentication" ref={wrapperRef}>
        <div className="authentication__heading">
          <button
            className={
              isLoginClicked
                ? "authentication__heading--login isAuthActive"
                : "authentication__heading--login"
            }
            onClick={() => {
              setIsLoginClicked(true);
              setIsRegisterClicked(false);
            }}
          >
            Log In
          </button>
          <button
            className={
              isRegisterClicked
                ? "authentication__heading--register isAuthActive"
                : "authentication__heading--register"
            }
            onClick={() => {
              setIsLoginClicked(false);
              setIsRegisterClicked(true);
            }}
          >
            Register
          </button>
        </div>

        <div className="authentication__forms">
          {isLoginClicked ? (
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginValidation}
              onSubmit={async (values, { resetForm }) => {
                setIsLoginLoading(true);
                const response = await dispatch(
                  login({
                    email: values.email,
                    password: values.password,
                  })
                );

                setIsLoginLoading(false);

                if (response.payload.message === "success") {
                  setIsAuthClicked(false);
                  resetForm();
                }
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
                  <form onSubmit={handleSubmit}>
                    <div className="authentication__forms--formik">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />

                      <div>
                        <span>
                          {errors.email && touched.email && errors.email}
                        </span>
                      </div>
                    </div>

                    <div className="authentication__forms--formik">
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />

                      <div>
                        <span>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </span>
                      </div>
                    </div>

                    <p>Forgot Password?</p>

                    <button
                      disabled={
                        isLoginLoading || !values.email || !values.password
                      }
                      type="submit"
                    >
                      {isLoginLoading ? <Loader /> : "Login"}
                    </button>

                    <span className="authentication__forms--error">
                      {errorMsg}
                    </span>
                  </form>
                );
              }}
            </Formik>
          ) : null}

          {isRegisterClicked ? (
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={registerValidation}
              onSubmit={async (values, { resetForm }) => {
                setIsRegisterLoading(true);
                const response = await dispatch(
                  register({
                    fullName: values.fullName,
                    email: values.email,
                    password: values.password,
                  })
                );

                setIsRegisterLoading(false);

                if (response.payload.message === "success") {
                  setIsAuthClicked(false);
                  resetForm();
                }
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
                  <form
                    onSubmit={handleSubmit}
                    className="authentication__forms--register"
                  >
                    <div className="authentication__forms--formik">
                      <input
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                      />

                      <div>
                        <span>
                          {errors.fullName &&
                            touched.fullName &&
                            errors.fullName}
                        </span>
                      </div>
                    </div>

                    <div className="authentication__forms--formik">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />

                      <div>
                        <span>
                          {errors.email && touched.email && errors.email}
                        </span>
                      </div>
                    </div>

                    <div className="authentication__forms--formik">
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />

                      <div>
                        <span>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </span>
                      </div>
                    </div>

                    <div className="authentication__forms--formik">
                      <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />

                      <div>
                        <span>
                          {errors.confirmPassword &&
                            touched.confirmPassword &&
                            errors.confirmPassword}
                        </span>
                      </div>
                    </div>

                    <div className="authentication__forms--register-tc">
                      <input
                        type="checkbox"
                        id="terms and conditions"
                        onClick={() => {
                          setIsCheckboxChecked(!isCheckboxChecked);
                        }}
                      />
                      <label htmlFor="terms and conditions">
                        I agree to the Terms and Condtions
                      </label>
                    </div>

                    <button
                      type="submti"
                      disabled={
                        !isCheckboxChecked ||
                        isRegisterLoading ||
                        !values.email ||
                        !values.password ||
                        !values.fullName ||
                        Object.keys(errors).length
                      }
                      className={!isCheckboxChecked ? "notChecked" : null}
                    >
                      {isRegisterLoading ? <Loader /> : "Register"}
                    </button>

                    <span className="authentication__forms--error">
                      {errorMsg}
                    </span>
                  </form>
                );
              }}
            </Formik>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

import React, { useRef, useState } from "react";
import useOutsideAlerter from "../OutsideAlerter/useOutsideAlerter";
import "./AuthModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../Redux/slices/userSlice";
import Loader from "../Loader/Loader";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "react-router-dom";

const AuthModal = ({ setIsAuthClicked, authIconRef }) => {
  const wrapperRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  useOutsideAlerter(wrapperRef, () => setIsAuthClicked(false), authIconRef);
  const dispatch = useDispatch();

  const errorMsg = useSelector((state) => state.user.error);

  const loginValidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(2, "Your message should be at least 2 characters")
      .required("Your message is required"),
  });

  const registerValidation = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Name should be at least 2 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(2, "Your message should be at least 2 characters")
      .required("Your message is required"),
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
              onSubmit={async () => {
                setIsLoginLoading(true);
                await dispatch(
                  login({
                    email,
                    password,
                  })
                );

                setIsLoginLoading(false);
                setIsAuthClicked(false);
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
                    className="authentication__forms--login"
                  >
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />

                      <p>{errors.email && touched.email && errors.email}</p>
                    </div>

                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />

                      <p>
                        {errors.password && touched.password && errors.password}
                      </p>
                    </div>

                    <p>Forgot Password?</p>

                    <button disabled={isLoginLoading} type="submit">
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
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsRegisterLoading(true);
                const response = await dispatch(
                  register({
                    fullName,
                    email,
                    password,
                  })
                );

                if (response.payload.message === "success") {
                  setIsRegisterLoading(false);
                  setIsAuthClicked(false);
                }
              }}
              className="authentication__forms--register"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={({ target }) => {
                  setFullName(target.value);
                }}
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value);
                }}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={({ target }) => {
                  setConfirmPassword(target.value);
                }}
              />

              <div className="authentication__forms--register-tc">
                <input
                  type="checkbox"
                  id="terms and conditions"
                  onClick={() => {
                    setIsCheckboxChecked(!isCheckboxChecked);
                  }}
                />
                <span htmlFor="terms and conditions">
                  I agree to the Terms and Condtions
                </span>
              </div>

              <button
                type="submti"
                disabled={!isCheckboxChecked || isRegisterLoading}
                className={!isCheckboxChecked ? "notChecked" : null}
              >
                {isRegisterLoading ? <Loader /> : "Register"}
              </button>

              <span className="authentication__forms--error">{errorMsg}</span>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

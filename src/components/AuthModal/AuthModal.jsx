import React, { useRef, useState } from "react";
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
  const [loginErr, setLoginErr] = useState("");
  const [registerErr, setRegisterErr] = useState("");

  const hideModal = () => {
    setRegisterErr("");
    setLoginErr("");
    setIsAuthClicked(false);
  };

  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const validation = Yup.object().shape({
    //LOGIN
    loginEmail: Yup.string()
      .email("Invalid Email Address")
      .when("isLoginClicked", {
        is: true,
        then: Yup.string().required("Email Address is required"),
      }),
    loginPassword: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .when("isLoginClicked", {
        is: true,
        then: Yup.string().required("Password is required"),
      }),

    //REGISTER
    fullName: Yup.string()
      .min(3, "Name should be at least 2 characters")
      .when("isRegisterClicked", {
        is: true,
        then: Yup.string().required("Full Name is required"),
      }),
    registerEmail: Yup.string()
      .email("Invalid Email Address")
      .when("isRegisterClicked", {
        is: true,
        then: Yup.string().required("Email Address is required"),
      }),
    registerPassword: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .when("isRegisterClicked", {
        is: true,
        then: Yup.string().required("Password is required"),
      }),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("registerPassword"), null],
      "Passwords must match"
    ),
  });

  return (
    <div className="overlay">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="close-modal"
        onClick={() => {
          hideModal();
        }}
      >
        <title>close</title>
        <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
      </svg>

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
          <Formik
            initialValues={{
              loginEmail: "",
              loginPassword: "",
              registerEmail: "",
              registerPassword: "",
              fullName: "",
              confirmPassword: "",
            }}
            validationSchema={validation}
            onSubmit={async (values, { resetForm }) => {
              if (isLoginClicked && !isRegisterClicked) {
                setIsLoginLoading(true);
                setLoginErr("");

                const response = await dispatch(
                  login({
                    email: values.loginEmail,
                    password: values.loginPassword,
                  })
                );

                setIsLoginLoading(false);

                if (response.error && response.error.message) {
                  setLoginErr(error);
                }

                if (response.payload.message === "success") {
                  setIsAuthClicked(false);
                  resetForm();
                }
              } else if (!isLoginClicked && isRegisterClicked) {
                setIsRegisterLoading(true);

                const response = await dispatch(
                  register({
                    fullName: values.fullName,
                    email: values.registerEmail,
                    password: values.registerPassword,
                  })
                );

                if (response.error) {
                  setRegisterErr(error);
                }

                setIsRegisterLoading(false);

                if (response.payload.message === "success") {
                  setIsAuthClicked(false);
                  resetForm();
                }
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
                <>
                  {isLoginClicked ? (
                    <form onSubmit={handleSubmit}>
                      <div className="authentication__forms--formik">
                        <input
                          name="loginEmail"
                          type="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.loginEmail}
                        />

                        <div>
                          <span>
                            {errors.loginEmail &&
                              touched.loginEmail &&
                              errors.loginEmail}
                          </span>
                        </div>
                      </div>

                      <div className="authentication__forms--formik">
                        <input
                          name="loginPassword"
                          type="password"
                          placeholder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.loginPassword}
                        />

                        <div>
                          <span>
                            {errors.loginPassword &&
                              touched.loginPassword &&
                              errors.loginPassword}
                          </span>
                        </div>
                      </div>

                      <p>Forgot Password?</p>

                      <button
                        disabled={isLoginLoading || Object.keys(errors).length}
                        type="submit"
                      >
                        {isLoginLoading ? <Loader /> : "Login"}
                      </button>

                      <span className="authentication__forms--error">
                        {loginErr}
                      </span>
                    </form>
                  ) : (
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
                          name="registerEmail"
                          type="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.registerEmail}
                        />

                        <div>
                          <span>
                            {errors.registerEmail &&
                              touched.registerEmail &&
                              errors.registerEmail}
                          </span>
                        </div>
                      </div>

                      <div className="authentication__forms--formik">
                        <input
                          name="registerPassword"
                          type="password"
                          placeholder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.registerPassword}
                        />

                        <div>
                          <span>
                            {errors.registerPassword &&
                              touched.registerPassword &&
                              errors.registerPassword}
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
                        type="submit"
                        disabled={
                          !isCheckboxChecked ||
                          isRegisterLoading ||
                          Object.keys(errors).length
                        }
                        className={!isCheckboxChecked ? "notChecked" : null}
                      >
                        {isRegisterLoading ? <Loader /> : "Register"}
                      </button>

                      <span className="authentication__forms--error">
                        {registerErr}
                      </span>
                    </form>
                  )}
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

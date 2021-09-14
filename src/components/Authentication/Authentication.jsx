import React, { useRef, useState } from "react";
import useOutsideAlerter from "../OutsideAlerter/useOutsideAlerter";
import "./Authentication.scss";

const Authentication = ({ isAuthClicked, setIsAuthClicked, authIconRef }) => {
  const wrapperRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const hideAuth = () => {
    setIsAuthClicked(!isAuthClicked);
  };

  useOutsideAlerter(wrapperRef, hideAuth, authIconRef);

  return (
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
          <div className="authentication__login">
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

            <button>Login</button>
            <p>Forgot Password?</p>
          </div>
        ) : null}

        {isRegisterClicked ? (
          <div className="authentication__register">
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

            <div className="authentication__register--tc">
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
              disabled={!isCheckboxChecked}
              className={!isCheckboxChecked ? "notChecked" : null}
            >
              Register
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Authentication;

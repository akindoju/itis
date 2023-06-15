import React, { useRef, useState } from "react";
import useOutsideAlerter from "../OutsideAlerter/useOutsideAlerter";
import "./AuthModal.scss";
import { useDispatch } from "react-redux";
import { login, register } from "../../Redux/slices/userSlice";

const AuthModal = ({ setIsAuthClicked, authIconRef }) => {
  const wrapperRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useOutsideAlerter(wrapperRef, () => setIsAuthClicked(false), authIconRef);
  const dispatch = useDispatch();

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  login({
                    email,
                    password,
                  })
                );
              }}
              className="authentication__login"
            >
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

              <button type="submit">Login</button>
              <p>Forgot Password?</p>
            </form>
          ) : null}

          {isRegisterClicked ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  register({
                    fullName,
                    email,
                    password,
                  })
                );
              }}
              className="authentication__register"
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
                type="submti"
                disabled={!isCheckboxChecked}
                className={!isCheckboxChecked ? "notChecked" : null}
              >
                Register
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

import { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card";
import "./LoginForm.css";

const formInit = {
  firstName: "",
  isFirstNameValid: null,
  fNameTouched: false,
  lastName: "",
  isLastNameValid: null,
  lNameTouched: false,
  email: "",
  isEmailValid: null,
  emailTouched: false,
  password: "",
  isPasswordValid: null,
  passwordTouched: false,
};

const formReducer = (state, action) => {
  if (action.type === "INPUT_fNAME") {
    return {
      ...state,
      firstName: action.value,
      isFirstNameValid: action.isValid,
    };
  }
  if (action.type === "INPUT_lNAME") {
    return {
      ...state,
      lastName: action.value,
      isLastNameValid: action.isValid,
    };
  }
  if (action.type === "INPUT_EMAIL") {
    return { ...state, email: action.value, isEmailValid: action.isValid };
  }
  if (action.type === "INPUT_PASSWORD") {
    return {
      ...state,
      password: action.value,
      isPasswordValid: action.isValid,
    };
  }
  if (action.type === "fNAME_BLUR") {
    return {
      ...state,
      fNameTouched: action.value,
    };
  }
  if (action.type === "lNAME_BLUR") {
    return {
      ...state,
      lNameTouched: action.value,
    };
  }
  if (action.type === "EMAIL_BLUR") {
    return {
      ...state,
      emailTouched: action.value,
    };
  }
  if (action.type === "PASSWORD_BLUR") {
    return {
      ...state,
      passwordTouched: action.value,
    };
  }
  return state;
};

function LoginForm(props) {
  const [formState, dispatchForm] = useReducer(formReducer, formInit);

  const onCancelHandler = () => {
    props.exitLogin(false);
    console.log("cancelClicked");
  };

  const fNameInputChangeHandler = (event) => {
    dispatchForm({
      type: "INPUT_fNAME",
      value: event.target.value,
      isValid: event.target.value !== "",
    });
  };
  const lNameInputChangeHandler = (event) => {
    dispatchForm({
      type: "INPUT_lNAME",
      value: event.target.value,
      isValid: event.target.value !== "",
    });
  };
  const emailInputChangeHandler = (event) => {
    dispatchForm({
      type: "INPUT_EMAIL",
      value: event.target.value,
      isValid:
        event.target.value.includes("@") && event.target.value.includes("."),
    });
  };
  const passwordInputChangeHandler = (event) => {
    dispatchForm({
      type: "INPUT_PASSWORD",
      value: event.target.value,
      isValid: event.target.value.length > 6,
    });
  };

  const fNameOnBlurHandler = () => {
    dispatchForm({ type: "fNAME_BLUR", value: true });
  };
  const lNameOnBlurHandler = () => {
    dispatchForm({ type: "lNAME_BLUR", value: true });
  };
  const emailOnBlurHandler = () => {
    dispatchForm({ type: "EMAIL_BLUR", value: true });
  };
  const passwordOnBlurHandler = () => {
    dispatchForm({ type: "PASSWORD_BLUR", value: true });
  };

  let formValues = [];

  for (const [key, value] of Object.entries(formState)) {
    formValues.push(value);
  }
  console.log(formValues);
  console.log(formValues.includes(false));

  const isFormValid = !formValues.includes(false) && !formValues.includes(null);

  const logIntoUserPage = (event) => {
    event.preventDefault();
    if (isFormValid) console.log("logged in");
    else {
      console.log("fail to login");
      fNameOnBlurHandler();
      lNameOnBlurHandler();
      emailOnBlurHandler();
      passwordOnBlurHandler();
    }
  };

  let fNameValid = null;
  if (formState.isFirstNameValid) fNameValid = true;
  else if (!formState.fNameTouched && !formState.isFirstNameValid)
    fNameValid = true;
  else if (formState.fNameTouched && !formState.isFirstNameValid)
    fNameValid = false;
  else if (formState.fNameTouched && formState.isFirstNameValid)
    fNameValid = true;

  let lNameValid = null;
  if (formState.isLastNameValid) lNameValid = true;
  else if (!formState.lNameTouched && !formState.isLastNameValid)
    lNameValid = true;
  else if (formState.lNameTouched && !formState.isLastNameValid)
    lNameValid = false;
  else if (formState.lNameTouched && formState.isLastNameValid)
    lNameValid = true;

  let emailValid = null;
  if (!formState.emailTouched && !formState.isEmailNameValid) emailValid = true;
  else if (formState.emailTouched && !formState.isEmailValid)
    emailValid = false;
  else if (formState.emailTouched && formState.isEmailValid) emailValid = true;

  let passwordValid = null;
  if (!formState.passwordTouched && !formState.isPasswordValid)
    passwordValid = true;
  else if (formState.passwordTouched && !formState.isPasswordValid)
    passwordValid = false;
  else if (formState.passwordTouched && formState.isPasswordValid)
    passwordValid = true;
  else if (!formState.passwordTouched && formState.isPasswordValid)
    passwordValid = true;

  return (
    <>
      {console.log("loginForm")}
      {console.log(formState)}
      <Card className="card">
        <form onSubmit={logIntoUserPage} className="login-form">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            className={fNameValid ? "" : "input-invalid"}
            onChange={fNameInputChangeHandler}
            onBlur={fNameOnBlurHandler}
          />
          {!fNameValid && (
            <p className="invalid-text">Name must not be empty</p>
          )}
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            className={lNameValid ? "" : "input-invalid"}
            onChange={lNameInputChangeHandler}
            onBlur={lNameOnBlurHandler}
          />
          {!lNameValid && (
            <p className="invalid-text">Last name must not be empty</p>
          )}
          <label htmlFor="form-email">Email:</label>
          <input
            type="email"
            id="form-email"
            className={emailValid ? "" : "input-invalid"}
            onChange={emailInputChangeHandler}
            onBlur={emailOnBlurHandler}
          />
          {!emailValid && <p className="invalid-text">Invalid email</p>}
          <label htmlFor="form-password">Password:</label>
          <input
            type="password"
            id="form-password"
            className={passwordValid ? "" : "input-invalid"}
            onChange={passwordInputChangeHandler}
            onBlur={passwordOnBlurHandler}
          />
          {!passwordValid && (
            <p className="invalid-text">
              Password must be at least 6 characters long
            </p>
          )}
          <div className="buttons">
            <button type="button" onClick={onCancelHandler}>
              Cancel
            </button>
            <button type="submit">Login</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default LoginForm;

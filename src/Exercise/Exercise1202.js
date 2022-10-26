import React from "react";
import "../Style/Exercise1202.css";

const useForm = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "change_value":
          return { ...state, value: action.value };
        case "add_error":
          return { ...state, errors: [...state.errors, action.error] };
        default:
          return state;
      }
    },
    {
      value: "",
      errors: [],
    }
  );
  const changeValue = (event) => {
    const newValue = event.target.value;
    dispatch({ type: "change_value", value: newValue });
  };
  const validateInput = (fn) => {
    const error = fn(state.value);
    if (error !== null) {
      dispatch({
        type: "add_error",
        error: error,
      });
    }
  };
  return { state, changeValue, validateInput };
};

const UserNameForm = () => {
  const { state, changeValue, validateInput } = useForm();
  const validate = () => {
    validateInput((v) =>
      v.length < 3 ? "Username must not be under 3 characters!" : null
    );
    validateInput((v) =>
      v.toLowerCase() === "test" ? "Cannot use a test username!" : null
    );
  };
  return (
    <div className="UsernameForm">
      <h3>Username Form</h3>
      <ul className="errors">
        {state.errors.map((error, index) => (
          <li key={`e-${index}`}>{error}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Username"
        onChange={changeValue}
        value={state.value}
      />
      <button onClick={validate}>Validate</button>
    </div>
  );
};

const Exercise1202 = () => {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_NOT_SECRET_CODE} Sample Form</h1>
      <UserNameForm />
    </div>
  );
};

export default Exercise1202;

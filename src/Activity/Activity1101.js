import React from "react";

const CounterView = (props) => {
  return (
    <div className="CounterView">
      <div>The current value is: {props.value}</div>
      <table>
        <tr>
          <td>
            <button onClick={props.increment}>
              Click here to increment it
            </button>
          </td>
          <td>
            <button onClick={props.decrement}>
              Click here to decrement it
            </button>
          </td>
          <td>
            <button onClick={props.reset}>Click here to reset</button>
          </td>
        </tr>
      </table>
      <div>\</div>
    </div>
  );
};

const useLogger = (value) => {
  React.useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);
};

const useCounter = (initialValue) => {
  const [value, setState] = React.useState(initialValue);
  const increment = () => setState(value + 1);
  const decrement = () => setState(value - 1);
  const reset = () => setState(0);
  return { value, increment, decrement, reset };
};

const Counter = (props) => {
  const { value, increment, decrement, reset } = useCounter(props.initialValue);
  useLogger(value);
  return (
    <CounterView
      increment={increment}
      decrement={decrement}
      value={value}
      reset={reset}
    />
  );
};

const Activity1101 = () => {
  return (
    <div>
      <h3>Counter</h3>
      <Counter initialValue={5} />
    </div>
  );
};

export default Activity1101;

import React, { Component } from "react";
import ConvertInput from "./ConvertInput";
import ConvertStatus from "./ConvertStatus";
import { StatusConsumer, StatusProvider } from "./StatusContext";

//ConfertFrom
class Activity701 extends Component {
  constructor(props) {
    super(props);

    const defaultCelsius = 20;

    this.state = {
      celcius: defaultCelsius,
      fahrenheit: this.getFahrenheit(defaultCelsius),
    };
  }

  getFahrenheit(c) {
    return parseInt((c * 9) / 5 + 32);
  }

  getCelsius(f) {
    return parseInt(((f - 32) * 5) / 9);
  }

  convertTemperature(convertTo, value) {
    return convertTo === "celsius"
      ? { celsius: this.getCelsius(value), fahrenheit: parseInt(value) }
      : { celsius: parseInt(value), fahrenheit: this.getFahrenheit(value) };
  }

  updateTemperature(convertTo, value = 0) {
    this.setState(() => {
      if (value === "" || value === "-") {
        const returnValue = value === "-" ? "-" : "";

        return {
          celsius: returnValue,
          fahrenheit: returnValue,
        };
      }

      return this.convertTemperature(convertTo, value);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Temperature Converter</h1>
        <StatusProvider value={this.state.celsius}>
          <ConvertForm
            temperature={this.state}
            updateTemperature={this.updateTemperature.bind(this)}
          />
        </StatusProvider>
      </div>
    );
  }
}

class ConvertForm extends Component {
  render() {
    const { temperature, updateTemperature } = this.props;

    return (
      <div>
        <div>
          <ConvertInput
            convertTo={"Celcius"}
            temperature={temperature.celcius}
            updateTemperature={updateTemperature}
          ></ConvertInput>
        </div>
        <div>
          <ConvertInput
            convertTo={"Fahrenheit"}
            temperature={temperature.fahrenheit}
            updateTemperature={updateTemperature}
          ></ConvertInput>
        </div>
        <WrapperComponent />
      </div>
    );
  }
}

const withStatus = (WrapperComponent) => {
  return () => {
    return (
      <StatusConsumer>
        {(props) => <WrapperComponent context={props} />}
      </StatusConsumer>
    );
  };
};
const WrapperComponent = withStatus(ConvertStatus);

export default Activity701;

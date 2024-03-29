import React, { Component } from "react";
import "../Style/Exercise709.css";

class Exercise709 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [
        {
          id: 1,
          name: "Tiger",
          number: 3890,
          endangered: true,
          photo: "https://source.unsplash.com/c8XlAc1akIU/400x300",
          donation: 10,
        },
        {
          id: 2,
          name: "Brown Bear",
          number: 200000,
          endangered: false,
          photo: "https://source.unsplash.com/c8XlAc1akIU/400x300",
          donation: 100,
        },
        {
          id: 3,
          name: "Red Panda",
          number: 10000,
          endangered: true,
          photo: "https://source.unsplash.com/2zYHKx8jtvU/400x300",
          donation: 50,
        },
      ],
    };
  }

  addList(details) {
    this.setState((prevstate) => {
      const newId = prevstate.details.length + 1;
      const newDetails = { ...details, id: newId };
      return { ...prevstate, details: [...prevstate.details, newDetails] };
    });
  }

  removeList(id) {
    this.setState((prevState) => {
      const list = prevState.details.filter((item) => item.id !== id);
      return { prevState, details: list };
    });
  }

  render() {
    return (
      <React.Fragment>
        <AnimalList
          details={this.state.details}
          removeList={this.removeList.bind(this)}
        >
          <h1>Endangered Animals</h1>
        </AnimalList>
        <AnimalForm addList={this.addList.bind(this)} />
      </React.Fragment>
    );
  }
}

class AnimalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: 0,
      endangered: false,
      photo: "",
      donation: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInputValue(target) {
    if (target.type === "radio" && target.value === "yes") {
      return true;
    } else if (target.type === "radio" && target.value === "no") {
      return false;
    }

    return target.value;
  }

  handleChange(event) {
    const inputTarget = event.target;
    const inputValue = this.getInputValue(inputTarget);
    const inputName = inputTarget.name;

    this.setState({ [inputName]: inputValue });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addList(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new animal details</h2>
        <label>
          <div className="title">Name:</div>{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className="title">Number:</div>{" "}
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <div className="title">Endangered:</div>
          <label>
            <input
              type="radio"
              name="endangered"
              value={this.state.endangered}
              onChange={this.handleChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="endangered"
              value={!this.state.endangered}
              onChange={this.handleChange}
            />{" "}
            No
          </label>
        </div>
        <label>
          <div className="title">Photo:</div>{" "}
          <input
            type="text"
            name="photo"
            value={this.state.photo}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className="title">Donation:</div> $
          <input
            type="number"
            name="donation"
            value={this.state.donation}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button>Add to the list</button>
        </div>
      </form>
    );
  }
}

const Photo = (props) => {
  return <img src={props.path} alt={props.name} />;
};

const AnimalDetails = (props) => {
  const { id, name, number, endangered, donation } = props.detail;
  const { removeList } = props.removeList;

  return (
    <li key={props.index}>
      <div>
        <p>{props.image}</p>
        <p>Animal: {name}</p>
        <p>Number: {number}</p>
        <p>Endangered: {endangered ? "Yes" : "No"}</p>
        <p style={{ color: props.donationColor }}>
          Donation amount: <span className="donation-color">${donation}</span>
        </p>
        <button onClick={() => props.removeList(id)}>
          Remove from the list
        </button>
      </div>
    </li>
  );
};

class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { donationColor: "black" };
  }
  componentDidMount() {
    const donationAmout = this.props.donationAmount;
    const donationColor = donationAmout > 50 ? "green" : "red";
    this.setState({ donationColor });
  }
  render() {
    return this.props.render({
      donationColor: this.state.donationColor,
    });
  }
}

const AnimalList = (props) => {
  const details = props.details;

  return (
    <div>
      {props.children}
      <ul className="list">
        {details.map((detail, index) => (
          <WrapperComponent
            key={index}
            donationAmount={detail.donation}
            render={({ donationColor }) => (
              <AnimalDetails
                donationColor={donationColor}
                image={<Photo path={detail.photo} title={detail.name} />}
                detail={detail}
                key={index}
                removeList={props.removeList}
              />
            )}
          />
        ))}
      </ul>
    </div>
  );
};

export default Exercise709;

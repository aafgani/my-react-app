import React, { Component } from "react";

const Photo = (props) => {
  return <img src={props.path} alt={props.name} />;
};

const AnimalDetail = (props) => {
  const { name, number, endangered, image } = props.detail;
  return (
    <li>
      <p>{props.image}</p>
      <p>Animal: {name}</p>
      <p>Number: {number}</p>
      <p>Endangered: {endangered ? "Yes" : "No"}</p>
    </li>
  );
};

const AnimalList = (props) => {
  const details = props.details;
  return (
    <div>
      {props.children}
      <ul>
        {details.map((detail, index) => (
          <AnimalDetail
            image={<Photo path={detail.photo} title={detail.name} />}
            detail={detail}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

class Exercise703 extends Component {
  render() {
    const details = [
      {
        name: "Tiger",
        number: 3890,
        endangered: true,
        photo: "https://source.unsplash.com/c8XlAc1akIU/200x100",
      },
      {
        name: "Brown Bear",
        number: 200000,
        endangered: false,
        photo: "https://source.unsplash.com/c8XlAc1akIU/200x100",
      },
      {
        name: "Red Panda",
        number: 10000,
        endangered: true,
        photo: "https://source.unsplash.com/c8XlAc1akIU/200x100",
      },
    ];

    return (
      <AnimalList details={details}>
        <h1>Endangered Animals</h1>
      </AnimalList>
    );
  }
}

export default Exercise703;

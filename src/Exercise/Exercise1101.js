import React from "react";
import "../Style/Exercise1101.css";

const Exercise1101 = () => {
  const url = "https://images.unsplash.com/photo-1562051036-e0eea191d42f";
  const [displayImage, setState] = React.useState(false);
  const toggleImage = () => setState(!displayImage);
  return (
    <div className="App">
      {displayImage && <img src={url} alt="some coffee beans"></img>}
      <br />
      <button onClick={toggleImage}>Toggle image display</button>
    </div>
  );
};

export default Exercise1101;

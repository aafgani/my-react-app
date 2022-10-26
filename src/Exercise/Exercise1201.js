import React from "react";

const Exercise1201 = () => {
  const [stock, setStock] = React.useState([]);
  const addNewItem = () => {
    setStock((prevStock) => {
      console.log("Adding new item...");
      return [...prevStock, "New Item"];
    });
  };
  return (
    <div>
      <p>Stock</p>
      <ul>
        {stock.map((s, index) => (
          <li key={`s-${index}`}>{s}</li>
        ))}
      </ul>

      <button onClick={addNewItem}>Add new item</button>
    </div>
  );
};

export default Exercise1201;

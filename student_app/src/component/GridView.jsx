import React from "react";
import "./GridView.css";

const GridView = ({ data, onSelect }) => {
  return (
    <div className="grid-view">
      {data.map((item) => (
        <div className="grid-item" key={item.id} onClick={() => onSelect(item)}>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default GridView;

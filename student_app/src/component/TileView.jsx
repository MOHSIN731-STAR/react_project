import React from "react";
import "./TileView.css";

const TileView = ({ data, onSelect }) => {
  return (
    <div className="tile-view">
      {data.map((item) => (
        <div className="tile-item" key={item.id} onClick={() => onSelect(item)}>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TileView;

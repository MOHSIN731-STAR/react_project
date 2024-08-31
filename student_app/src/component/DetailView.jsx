import React from "react";
import "./DetailView.css";

const DetailedView = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="detailed-view">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <h2>{item.name}</h2>
      <p>{item.email}</p>
      <p>{item.phone}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default DetailedView;

import React, { useState, useEffect } from "react";
import GridView from "./component/GridView";
import TileView from "./component/TileView";
import DetailView from "./component/DetailView";
import Navbar1 from "./component/Navbar1";
import "bootstrap/dist/css/bootstrap.min.css";

// import DetailedView from "./component/DetailView";
const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDetailedView = () => {
    setSelectedItem(null);
  };

  return (
    <div className="app">
      <Navbar1 />
      <div className="view-switcher">
        <button onClick={() => setViewMode("grid")}>Grid View</button>
        <button onClick={() => setViewMode("tile")}>Tile View</button>
      </div>
      {viewMode === "grid" ? (
        <GridView data={data} onSelect={handleSelectItem} />
      ) : (
        <TileView data={data} onSelect={handleSelectItem} />
      )}
      {selectedItem && (
        <DetailView item={selectedItem} onClose={handleCloseDetailedView} />
      )}
    </div>
  );
};

export default App;

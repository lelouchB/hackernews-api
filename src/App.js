import React, { useEffect, useState } from "react";
import "./App.css";
import { getStoryIds } from "./services/hnApi";

function App() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello React</header>
      <p>{storyIds}</p>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import { getStoryIds } from "./services/hnApi";

function App() {
  const [storyIds, setstoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => data && setstoryIds(data));
  }, []);

  return (
    <div>
      <p>{JSON.stringify(storyIds)}</p>
    </div>
  );
}

export default App;

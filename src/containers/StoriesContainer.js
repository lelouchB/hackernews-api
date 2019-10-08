import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";

export const StoriesContainer = () => {
  const [storyIds, setstoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setstoryIds(data));
  }, []);

  return (
    <>
      <h2>Hacker News Stories</h2>
      {storyIds.map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};

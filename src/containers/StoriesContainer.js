import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../services/hnApi";
import { Story } from "../components/Story";

export const StoriesContainer = () => {
  const [storyIds, setstoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setstoryIds(data));
    getStory(20970623).then(data => console.log(data));
  }, []);

  return storyIds.map(storyId => <Story storyId={storyId} />);
};

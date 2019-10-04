/*eslint-disable react-hooks/exhaustive-deps*/

import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";

export const Story = ({ storyId }) => {
  const [story, setstory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setstory(data));
  }, []);

  return <div> {JSON.stringify(story)}</div>;
};

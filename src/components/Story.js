/*eslint-disable react-hooks/exhaustive-deps*/

import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";

export const Story = ({ storyId }) => {
  const [story, setstory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setstory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title} </a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement>
          {` `}
          {story.by}
        </span>

        <span data-testid="story-time">
          <StoryMetaElement>Posted:</StoryMetaElement>
          {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

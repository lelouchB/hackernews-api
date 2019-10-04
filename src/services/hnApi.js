import axios from "axios";
import { async } from "q";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newStories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl.then(data => data));

  return result;
};

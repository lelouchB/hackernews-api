/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MAX_STORIES, STORY_INCREMENT } from "../constants/index";
import { debounce } from "../utils/debounce";

export const useInfiniteScroll = () => {
  const [loading, setloading] = useState(false);
  const [count, setcount] = useState(STORY_INCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setloading(true);
  }, 100);
  useEffect(() => {
    if (!loading) return;
    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setcount(MAX_STORIES);
    } else {
      setcount(count + STORY_INCREMENT);
    }
    setloading(false);
  }, [loading]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { count };
};

import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";

export function useVideos(selectedCategory) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const response = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(response.items);
      setTimeout(
        () =>
          setVideos([
            ...response.items.map((item) => ({
              ...item,
              likes: Math.floor(Math.random() * 25),
            })),
          ]),
        0
      );
    };
    void fetching();
  }, [selectedCategory]);

  return videos;
}

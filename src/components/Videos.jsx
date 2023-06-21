import React, { useCallback, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Video, VideoMemo } from "./Video";
import { VideoVisible, VideoVisibleMemo } from "./VideoVisible";

const getKey = ({ id }) => id?.videoId || id?.channelId;

const Videos = ({ videos: videosInitial, direction }) => {
  const [videos, setVideos] = useState(videosInitial ?? []);
  useEffect(
    () => setVideos((videosInitial ?? []).filter((v) => getKey(v))),
    [videosInitial]
  );

  const addLike = (videoId) => {
    setVideos((videos) =>
      videos.map((video) => {
        if (video.id?.videoId === videoId) {
          return { ...video, likes: video.likes + 1 };
        }
        return video;
      })
    );
  };

  if (!videosInitial?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2.2}
      sx={{ pl: { sm: "50px" } }}
    >
      {videos.map((item) => (
        <Video video={item} key={getKey(item)} addLike={addLike} />
      ))}
    </Stack>
  );
};

export default Videos;

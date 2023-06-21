import React, { Profiler } from "react";
import { Stack } from "@mui/material";
import { Video } from "./Video.jsx";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  console.log(videos);
  return (
    <Profiler
      id="videos"
      onRender={(id, phase, actualDuration) => {
        console.log(
          "Videos just rendered in",
          Math.floor(actualDuration),
          "ms"
        );
      }}
    >
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        // paddingLeft='50px'
        gap={2.2}
        sx={{ pl: { sm: "50px" } }}
      >
        {videos.map((item) => (
          <Video video={item} key={item.id?.videoId || item.id?.channelId} />
        ))}
      </Stack>
    </Profiler>
  );
};

export default Videos;

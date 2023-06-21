import React from "react";
import { Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./index.js";

export const Video = ({ video, addLike }) => {
  return (
    <Box sx={{ ml: { sm: "6px" }, mt: { sm: "13px" } }}>
      {video.id.videoId && <VideoCard video={video} addLike={addLike} />}
      {video.id.channelId && <ChannelCard channelDetail={video} />}
    </Box>
  );
};

export const VideoMemo = React.memo(Video);

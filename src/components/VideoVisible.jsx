import { useOnlyVisible } from "./useOnlyVisible";
import { memo, useRef } from "react";
import { Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./index";

export const VideoVisible = ({ video, addLike }) => {
  const ref = useRef(null);
  const isVisible = useOnlyVisible(ref);

  return (
    <Box
      sx={{
        ml: { sm: "6px" },
        mt: { sm: "13px" },
        width: "325px",
        height: "380px",
      }}
      ref={ref}
    >
      {isVisible ? (
        <>
          {video.id.videoId && <VideoCard video={video} addLike={addLike} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </>
      ) : null}
    </Box>
  );
};

export const VideoVisibleMemo = memo(VideoVisible);

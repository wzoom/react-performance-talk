import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const NavBar = React.lazy(() => import("./components/NavBar"));
const Feed = React.lazy(() => import("./components/Feed"));
const VideoDetail = React.lazy(() => import("./components/VideoDetail"));
const ChannelDetail = React.lazy(() => import("./components/ChannelDetail"));
const SearchFeed = React.lazy(() => import("./components/SearchFeed"));

const Loading = () => "Loading...";

const PageNotFound = () => (
  <h1
    style={{
      color: "#fff",
      fontSize: "25px",
      textAlign: "center",
      marginTop: "210px",
    }}
  >
    404: Page not found
  </h1>
);

const AppLazy = () => (
  <BrowserRouter>
    <Box sx={{ background: "#000" }}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <React.Suspense fallback={<Loading />}>
              <Feed />
            </React.Suspense>
          }
        />
        <Route
          path="/video/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <VideoDetail />
            </React.Suspense>
          }
        />
        <Route
          path="/channel/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <ChannelDetail />
            </React.Suspense>
          }
        />
        <Route
          path="/search/:searchTerm"
          element={
            <React.Suspense fallback={<Loading />}>
              <SearchFeed />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <PageNotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default AppLazy;

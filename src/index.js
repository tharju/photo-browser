import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Main views.
import HomeView from "./views/HomeView";
import PhotoGalleryView from "./views/PhotoGalleryView";
import PlaceholderGalleryView from "./views/PlaceholderGalleryView";
import UserListView from "./views/UserListView";

// Embedded views.
import PhotoView from "./views/PhotoView";
import UserView from "./views/UserView";

// REST API Services.
import { getPhoto as getPhoto_fromPicSum } from "./services/picsum.photos/photos";
import { getPhoto as getPhoto_fromJSONPlaceholder } from "./services/jsonplaceholder.typicode.com/photos";

import "./assets/css/style.css";

/**
 * Entry point for the React application.
 * Sets up the router with routes to different views in the application.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    errorElement: <div>ROOT Error</div>,
  },
  {
    path: "/photos",
    element: <PhotoGalleryView basePath="/photos/" />,
    children: [
      {
        path: "/photos/:id",
        element: (
          <PhotoView getPhoto={getPhoto_fromPicSum} returnPath="/photos/" />
        ),
      },
    ],
  },
  {
    path: "/placeholders",
    element: <PlaceholderGalleryView basePath="/placeholders/" />,
    children: [
      {
        path: "/placeholders/:id",
        element: (
          <PhotoView
            getPhoto={getPhoto_fromJSONPlaceholder}
            returnPath="/placeholders/"
          />
        ),
      },
    ],
  },
  {
    path: "/users",
    element: <UserListView />,
    children: [
      {
        path: "/users/:id",
        element: <UserView />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

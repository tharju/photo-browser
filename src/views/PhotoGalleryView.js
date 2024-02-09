import React from "react";
import PropTypes from "prop-types";
import { useNavigate, Outlet } from "react-router-dom";

import Page from "../components/Page";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";

import { getPhotos } from "../services/picsum.photos/photos";

/**
 * PhotoGalleryView Component
 * Renders the photo gallery view within the application, utilizing the PhotoGallery component to display a collection of photos fetched from Lorem Picsum.
 *
 * Props:
 * - basePath (String): The base path URL for navigation. It is used to construct the path for navigation when a photo is selected.
 */
const PhotoGalleryView = ({ basePath }) => {
  const navigate = useNavigate();

  // Navigate to single image view.
  const handleNavigate = (id) => {
    navigate(basePath + id);
  };

  // Render the view. The single image view is rendered inside this view using the Outlet.
  return (
    <Page>
      <PhotoGallery
        title="Photos from Lorem Picsum"
        getPhotos={getPhotos}
        onSelect={handleNavigate}
      />
      <Outlet />
    </Page>
  );
};

PhotoGalleryView.propTypes = {
  basePath: PropTypes.string,
};

export default PhotoGalleryView;

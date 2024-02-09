import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { Lightbox } from "react-modal-image";

/**
 * PhotoView Component
 * Displays detailed information for a single photo, including a lightbox view.
 *
 * Props:
 * - getPhoto (Function): A function to fetch the photo's details using its ID.
 * - returnPath (String): The path to navigate back to upon closing the photo detail view.
 */
const PhotoView = ({ getPhoto, returnPath = "/" }) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the photo's details.
  useEffect(() => {
    getPhoto(id)
      .then((photo) => {
        setPhoto(photo);
        setError(null);
      })
      .catch((error) => {
        console.error("Failed to fetch photo:", error);
        setError(error);
      });
  }, [id, getPhoto]);

  // Navigate back.
  const handleClose = () => {
    navigate(returnPath);
  };

  // Error when fetching details.
  if (error) {
    return <div>Error loading photo.</div>;
  }

  // Fetching details.
  if (!photo) {
    return null;
  }

  const { title, url, thumbnailUrl } = photo;

  // Render a lightbox that represents the view.
  return (
    <Lightbox
      small={thumbnailUrl}
      large={url}
      alt={title}
      onClose={handleClose}
    />
  );
};

PhotoView.propTypes = {
  getPhoto: PropTypes.func,
  returnPath: PropTypes.string,
};

export default PhotoView;

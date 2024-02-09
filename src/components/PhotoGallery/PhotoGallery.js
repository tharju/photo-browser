import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import TextBlock from "../TextBlock";
import ImageGallery from "./ImageGallery";
import LoadingIndicator from "./LoadingIndicator";

/**
 * PhotoGallery Component
 * Renders a dynamic, infinitely scrollable gallery of photos.
 *
 * Props:
 * - title (String): Title for the photo gallery.
 * - getPhotos (Function): Function to fetch photos based on the current page. Should return a promise that resolves to an array of photo objects.
 * - onSelect (Function): Callback function invoked when a photo is selected. Receives the photo's id as an argument.
 *
 * This component uses an IntersectionObserver to dynamically load more photos as the user scrolls.
 */
const PhotoGallery = ({ title, getPhotos, onSelect }) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // True when images are being fetched from the server.
  const [completed, setCompleted] = useState(false); // True when all images have been fetched.

  // An end element that starts reloading images.
  const endElementRef = useRef(null);

  // Dynamic loading of images.
  useEffect(() => {
    // Set the observer to follow end element.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!completed && entries[0].isIntersecting && !loading) {
          setLoading(true);

          // Start fetching images based on the current page.
          getPhotos(page)
            .then((photos) => {
              if (photos && photos.length === 0) {
                // All images retrieved from the server, mark the operation as completed.
                setCompleted(true);
                setLoading(false);

                console.log("********** All images retrieved from the server");
                return;
              }

              setPhotos((currentPhotos) => [...currentPhotos, ...photos]);
              setPage((currentPage) => currentPage + 1);

              setLoading(false);
            })
            .catch((error) => {
              console.error("Failed to fetch photos:", error);
            });
        }
      },
      { threshold: 1.0 },
    );

    // Set target element to watch.
    if (endElementRef.current) {
      observer.observe(endElementRef.current);
    }

    return () => observer.disconnect();
  }, [loading, completed, page, getPhotos]);

  const handleSelect = (id) => {
    onSelect(id);
  };

  return (
    <>
      <TextBlock title={title} />
      <ImageGallery images={photos} onImageClick={handleSelect} />

      <LoadingIndicator loading={loading} />
      <div ref={endElementRef} />
    </>
  );
};

PhotoGallery.propTypes = {
  title: PropTypes.string,
  getPhotos: PropTypes.func,
  onSelect: PropTypes.func,
};

export default PhotoGallery;

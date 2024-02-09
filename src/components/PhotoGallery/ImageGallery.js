import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import Image from "./Image";
import ContainerBlock from "../ContainerBlock";

/**
 * ImageGallery Component
 * Renders a gallery of images using the Image component.
 *
 * Props:
 * - images (Array): An array of image objects to be displayed in the gallery.
 * - onImageClick (Function): A callback function that is invoked when an image in the gallery is clicked.
 */

const ImageGallery = ({ images, onImageClick }) => {
  // Memoize images.
  const memoImages = useMemo(() => {
    return images;
  }, [images]);

  // Memoize callback.
  const handleClick = useCallback(
    (id) => {
      onImageClick(id);
    },
    [onImageClick],
  );

  return (
    <ContainerBlock>
      {memoImages.map((image) => {
        return <Image key={image.id} data={image} onImageClick={handleClick} />;
      })}
    </ContainerBlock>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  onImageClick: PropTypes.func,
};

export default ImageGallery;

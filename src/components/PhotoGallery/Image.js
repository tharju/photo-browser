import React from "react";
import PropTypes from "prop-types";

/**
 * Image Component
 * Renders an Image component.
 *
 * Props:
 * - data (Object): Contains the image data including `id` and `thumbnailUrl`.
 * - onImageClick (Function): Callback function that is invoked when the image is clicked.
 */
const Image = ({ data, onImageClick }) => {
  const { id, thumbnailUrl } = data;

  const handleClick = () => {
    onImageClick(id);
  };

  return (
    <div
      className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"
      onClick={handleClick}
    >
      <figure className="figure">
        <a
          href="#"
          className="gallery-image-link"
          itemProp="contentUrl"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img
            src={thumbnailUrl}
            itemProp="thumbnail"
            alt="Image description"
            style={{ width: "100%" }}
          />
        </a>
      </figure>
    </div>
  );
};

Image.propTypes = {
  data: PropTypes.object,
  onImageClick: PropTypes.func,
};

export default React.memo(Image);

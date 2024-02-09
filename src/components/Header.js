import React from "react";
import PropTypes from "prop-types";

/**
 * Header Component
 * Renders a header section with a background image specified by the imageUrl prop.
 *
 * Props:
 * - imageUrl (String): The URL of the background image to be used for the header.
 */
const Header = ({ imageUrl }) => {
  return (
    <header
      className="py-5 bg-image-full masthead"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <div className="container position-relative px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  imageUrl: PropTypes.string,
};

export default Header;

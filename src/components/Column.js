import React from "react";
import PropTypes from "prop-types";

/**
 * Column Component
 * Wraps content within a Bootstrap column layout.
 *
 * Props:
 * - children (PropTypes.node | PropTypes.arrayOf(PropTypes.node)): The content to be displayed within the column container.
 */
const Column = ({ children }) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">{children}</div>
  );
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Column;

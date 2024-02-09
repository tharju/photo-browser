import React from "react";
import PropTypes from "prop-types";

/**
 * ContainerBlock Component
 * Wraps content within a Bootstrap row layout.
 *
 * Props:
 * - children (PropTypes.node | PropTypes.arrayOf(PropTypes.node)): The content to be displayed within the row container.
 */
const ContainerBlock = ({ children }) => {
  return <div className="row text-center text-lg-start g-2">{children}</div>;
};

ContainerBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ContainerBlock;

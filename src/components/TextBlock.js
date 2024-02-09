import React from "react";
import PropTypes from "prop-types";

/**
 * TextBlock Component
 * Renders a block of text including a title and content.
 *
 * Props:
 * - title (String): The title of the text block, displayed above the content.
 * - content (React.Node): The content to be displayed under the title.
 */

const TextBlock = ({ title, content }) => {
  return (
    <div className="row">
      <div className="col">
        <h2 className="text-center text-lg-start mt-4 mb-0">{title}</h2>
        <hr className="mb-3" />
        {content}
      </div>
    </div>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
};

export default TextBlock;

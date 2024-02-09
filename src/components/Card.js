import React from "react";
import PropTypes from "prop-types";

/**
 * Card Component
 * Renders a card layout including a title and custom children content.
 *
 * Props:
 * - title (String): The title displayed at the top of the card content.
 * - children (PropTypes.node | PropTypes.arrayOf(PropTypes.node)): The content to be displayed within the card's body.
 */
const Card = ({ title, children }) => {
  return (
    <div className="card h-100 shadow border-0">
      <img
        className="card-img-top"
        src="https://dummyimage.com/600x56/6c757d/343a40"
        alt="..."
      />

      <div className="card-body p-4">
        <h5 className="card-title mb-3">{title}</h5>
        <hr />
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Card;

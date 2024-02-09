import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * LoadingIndicator Component
 * Displays a loading indicator with a delay.
 *
 * Props:
 * - loading (Boolean): A boolean prop to control the visibility of the loading indicator.
 *   When true, the loading indicator is displayed after a short delay. When false, the indicator is hidden immediately.
 */
const LoadingIndicator = ({ loading }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timerId;
    if (loading) {
      // Wait 200ms before displaying the indicator
      timerId = setTimeout(() => {
        setShowLoader(true);
      }, 200);
    } else {
      // Hide immediately.
      setShowLoader(false);
      clearTimeout(timerId);
    }

    return () => clearTimeout(timerId);
  }, [loading]);

  return (
    <div className="loader-container">
      {showLoader && <div className="loader" />}
    </div>
  );
};

LoadingIndicator.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingIndicator;

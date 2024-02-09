import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

/**
 * Page Component
 * Wraps the content of a page with a common structure, including a navbar and optional header.
 *
 * Props:
 * - header (PropTypes.element): An optional React element to display as the page header.
 * - children (PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])): The content of the page to be rendered within the layout.
 */
const Page = ({ header, children }) => {
  return (
    <>
      <Navbar />
      {header}
      <section className="pt-4">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-12">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

Page.propTypes = {
  header: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Page;

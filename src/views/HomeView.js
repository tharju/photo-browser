import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import Header from "../components/Header";
import TextBlock from "../components/TextBlock";

/**
 * HomeView Component
 * Serves as the main landing page of the Photo Browser application, presenting a general overview of the application.
 *
 * Props:
 * None
 */
const HomeView = () => {
  const header = <Header imageUrl="/images/photos-background.webp" />;
  const content = (
    <>
      <p className="mb-4">
        Photo Browser is a simple web application that represents features
        common to many real-life applications. This includes retrieving data
        from the REST API, displaying the data in a list, and basic navigation
        by displaying a page that describes the data for a single list item. The
        application consists of three main views described below.
      </p>

      <h2 className="h5">Photos</h2>
      <p className="mb-4">
        Scrollable photo gallery. More images are loaded when you scroll down
        the page. Images can be scrolled down as far as there are in the
        service. By clicking on the image, it opens in its own view (Lightbox).
        You can open the gallery <Link to="/photos/">here</Link>.
      </p>

      <h2 className="h5">Placeholders</h2>
      <p className="mb-4">
        Another gallery with placeholder images. You can open the gallery{" "}
        <Link to="/placeholders/">here</Link>.
      </p>

      <h2 className="h5">Users</h2>
      <p className="mb-5">
        A view that lists users. You can select an individual user, and their
        information will be displayed in their own view. You can open the view{" "}
        <Link to="/users/">here</Link>.
      </p>
      <hr />
      <p className="mb-0 text-muted">
        The application has been implemented for a technical interview at
        Futurice.
      </p>
      <p className="text-muted">
        The content from{" "}
        <a
          href="https://picsum.photos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lorem Picsum
        </a>{" "}
        and
        <a
          href="https://jsonplaceholder.typicode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          JSONPlaceholder
        </a>
        . Hero image created with DALL-E.
      </p>
    </>
  );

  return (
    <Page header={header}>
      <TextBlock title="Photo Browser" content={content} />
    </Page>
  );
};

export default HomeView;


# Description

Photo Browser is a simple web application that represents features common to many real-life applications.
This includes retrieving data from the REST API, displaying the data in a list, and basic navigation by displaying a page that describes the data for a single list item.
The application has been implemented for a technical interview at Futurice.

The application consists of three main views described below.

### Photos

Scrollable photo gallery. More images are loaded when you scroll down the page. Images can be scrolled down as far as there are in the service. By clicking on the image, it opens in its own view (Lightbox).

### Placeholders

Another gallery with placeholder images.

### Users

A view that lists users. You can select an individual user, and their information will be displayed in their own view.

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed (which includes npm). Follow these instructions to install the project locally.

Clone the project repository:

```bash
git clone https://github.com/tharju/react-starter-project.git
cd react-starter-project
```

Install project dependencies:

```bash
npm install
```

## Usage

This section explains how to use the application.

### In Development Mode

Start the development server, which opens the application in your browser and automatically refreshes it when changes are made:

```bash
npm start
```

The application should now be running at [http://localhost:8080](http://localhost:3000).

### Building for Production

Build the application for production using:

```bash
npm run build
```

This creates a `build` directory containing a production build of your application. You can serve this content from any static content hosting service.

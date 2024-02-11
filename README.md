# Photo Browser

Photo Browser is a simple web application that represents features common to many real-life applications.
This includes retrieving data from the REST API, displaying the data in a list, and basic navigation by displaying a page that describes the data for a single list item.
The application has been implemented for a technical interview at Futurice.

## Installation

Clone the project repository:

```bash
git clone https://github.com/tharju/photo-browser.git
cd photo-browser
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

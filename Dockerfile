# Use Node.js version 20 as the base image.
FROM node:20

# Set the working directory in the container to /app.
WORKDIR /app

# Copy all needed files to the container's /app directory.
COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
COPY .babelrc /app/
COPY webpack.config.js /app/

# Execute the npm install command, which installs all dependencies according to the package.json file.
RUN npm install

# Define the startup command that runs the Node.js server.
CMD ["npm", "start"]

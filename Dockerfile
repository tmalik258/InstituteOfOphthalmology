# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /InstituteOfOphthalmology

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files into the docker image
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 4173

# Set the command to start the app
CMD [ "npm", "run", "preview", "--", "--host", "0.0.0.0" ]
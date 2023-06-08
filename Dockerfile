# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the project files to the container
COPY . .

# Build the React app for production
RUN npm run build

# Specify the command to run the app
CMD ["npm", "start"]

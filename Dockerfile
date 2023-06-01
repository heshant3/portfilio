# Use an official Node.js runtime as the base image
FROM node:14-alpine

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app app
USER app

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .





# Set the command to serve the built React app
CMD ["npm", "run", "start"]


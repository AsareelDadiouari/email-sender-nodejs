# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the app source code to the working directory
COPY . .

# Expose the application port
EXPOSE 3000
EXPOSE 3443

# Start the application with nodemon
CMD ["nodemon", "app.js"]

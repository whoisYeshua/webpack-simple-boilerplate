# Stage 1 - the build process

# The as build part allows us to name this part of the build process. That name can then be referred to when configuring the production environment later.
FROM node:18.18.2-alpine as build-app

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# If we are building our code for production
RUN npm ci

# Bundle app source (copy the entire current directory into a build context)
COPY . .

# Build app
RUN CI=true npm run build

# Stage 2 - the production environment

# Bundle static assets with nginx
FROM nginx:1.25.3-alpine

# Copy built assets from builder
COPY --from=build-app /app/dist /usr/share/nginx/html

# Add our nginx.conf
COPY --from=build-app /app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

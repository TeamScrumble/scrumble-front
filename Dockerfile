FROM node:20-alpine AS build
WORKDIR /app
ARG VITE_API_BASE_URL
COPY dist /app/dist
COPY package*.json ./
RUN npm install
COPY . .
RUN echo "VITE_API_BASE_URL=${VITE_API_BASE_URL}" > .env.production
RUN cat .env.production
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

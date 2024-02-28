### STAGE 1: Build ###
FROM node:20-bullseye-slim AS installer
WORKDIR /usr/src/app
COPY package.json .
COPY . .
RUN npm install
RUN npm run build

### STAGE 2: build production
FROM gcr.io/distroless/nodejs20-debian11 AS builder
WORKDIR /usr/src/app
COPY --from=installer /usr/src/app .


### STAGE 3: Run ###
FROM nginx:1.13.12-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/angular-standalone/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
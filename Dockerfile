# --- Build stage ---
FROM node:24-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Se ti servisse un sub-path un giorno aggiungi --build-arg VITE_BASE=/foo/
ARG VITE_BASE=/
ENV VITE_BASE=${VITE_BASE}

RUN npm run build

# --- Runtime stage ---
FROM nginx:1.27-alpine

# Ensure base packages are updated to pick up security fixes and add curl for healthcheck
# RUN apk update && apk upgrade --no-cache && apk add --no-cache curl

# Copia la config SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia i file buildati
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK CMD wget -qO- http://localhost/ > /dev/null || exit 1


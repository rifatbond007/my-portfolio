# Portfolio web app as a static site served by nginx.
#   docker build -t my-portfolio .
#   docker run --rm -p 8080:80 my-portfolio   → http://localhost:8080

# ---- build ------------------------------------------------------------------
FROM node:20-alpine AS build
WORKDIR /app

# Install only what the web app needs. Manifests first so this layer is cached.
COPY package.json package-lock.json .npmrc ./
COPY apps/web/package.json apps/web/
COPY apps/api/package.json apps/api/
COPY packages/shared/package.json packages/shared/
RUN npm ci --workspace=apps/web --include-workspace-root

COPY apps/web apps/web

# Optional: API origin baked into the bundle at build time.
ARG VITE_API_BASE_URL=""
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
RUN npm run build --workspace=apps/web

# ---- serve ------------------------------------------------------------------
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

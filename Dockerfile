# ---------- Etapa 1: compilación ----------
FROM node:22-alpine AS build

WORKDIR /app

# Dependencias primero para aprovechar la caché de capas.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# URL opcional de una futura API externa. Se inyecta en tiempo de build.
ARG VITE_API_URL=""
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# ---------- Etapa 2: servidor estático ----------
FROM nginx:stable-alpine AS runtime

# Railway inyecta PORT; 8080 se usa como valor local por defecto.
ENV PORT=8080

# La imagen oficial de Nginx procesa las plantillas de esta carpeta y
# genera /etc/nginx/conf.d/default.conf sustituyendo ${PORT}.
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT}/healthz" > /dev/null 2>&1 || exit 1

# El entrypoint oficial ejecuta envsubst y luego inicia Nginx en primer plano.
CMD ["nginx", "-g", "daemon off;"]

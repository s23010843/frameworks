# Deployment Guide

## GitHub Pages Deployment
https://docs.astro.build/en/guides/deploy/github/

## Docker Deployment

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

### Build and Run with Docker

#### Option 1: Using Docker Compose (Recommended)
```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at http://localhost:8080

#### Option 2: Using Docker Commands
```bash
# Build the image
docker build -t astro-frameworks .

# Run the container
docker run -d -p 8080:80 --name astro-frameworks astro-frameworks

# View logs
docker logs -f astro-frameworks

# Stop and remove the container
docker stop astro-frameworks
docker rm astro-frameworks
```

### Docker Image Details
- **Base Image**: node:20-bullseye (for building)
- **Runtime Image**: nginx:1.26-alpine (for serving)
- **Included Interpreters**: Python 3, PHP
- **Port**: 80 (mapped to 8080 on host)
- **Health Check**: Enabled with 30s interval

### Production Deployment
For production environments, consider:
1. Using a reverse proxy (Nginx, Traefik, Caddy)
2. Setting up SSL/TLS certificates
3. Configuring environment variables
4. Setting up CI/CD pipelines for automated builds

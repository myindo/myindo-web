# Landing Page

A SvelteKit landing page for valos.id.

## Development

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

## Docker Deployment

This project is configured to run in Docker alongside your existing nginx setup.

### Prerequisites

- Docker and Docker Compose installed
- An existing nginx container with the weejewel/nginx-with-certbot image

### Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd landing-page
```

2. Build and start the container:
```bash
docker-compose up -d
```

3. Test direct access to the application (optional):
```bash
# The SvelteKit application will be accessible on port 3001 of the host
curl http://localhost:3001
```

4. Copy the nginx configuration to your existing nginx setup:
```bash
# Copy the nginx config to your existing nginx configuration directory
sudo cp nginx/conf.d/valos.id.conf /path/to/your/nginx/conf.d/
```

5. Connect your existing nginx container to the same network:
```bash
# Connect your nginx container to the valos-id-network
docker network connect valos-id-network nginx
```

6. Reload nginx to apply the new configuration:
```bash
# Reload your nginx container
docker exec nginx nginx -s reload
```

7. Obtain SSL certificates for your domain (if not already done):
```bash
# Replace with your actual email
docker exec nginx certbot certonly --webroot -w /usr/share/nginx/letsencrypt -d valos.id -d www.valos.id --email your-email@example.com --agree-tos --non-interactive
```

### Configuration Details

- The SvelteKit application runs on port 3000 inside its container
- The container is accessible on port 3001 of the host machine
- The container joins the "wg-easy" network to communicate with nginx
- The nginx configuration should be placed in your existing nginx container's configuration directory

### Troubleshooting

If you can't access www.valos.id, check the following:

1. Make sure the SvelteKit container is running:
```bash
docker ps | grep landing-page
```

2. Test direct access to the container:
```bash
curl http://localhost:3001
```

3. Check if nginx is properly configured to proxy to the container:
```bash
# Check nginx configuration syntax
docker exec nginx nginx -t
```

4. Check nginx logs for errors:
```bash
docker logs nginx
```

### Maintenance

- To update the application:
```bash
docker-compose down
docker-compose up -d --build
```

- To view logs:
```bash
docker-compose logs -f landing-page
```

- If you update the nginx configuration, remember to reload nginx:
```bash
docker exec nginx nginx -s reload
```

- To renew SSL certificates (usually automated by certbot, but can be done manually):
```bash
docker exec nginx certbot renew
docker exec nginx nginx -s reload
```

## Project Structure

This project uses:
- SvelteKit with Node.js adapter
- Tailwind CSS for styling
- TypeScript
- Vite as the build tool
- Playwright for testing
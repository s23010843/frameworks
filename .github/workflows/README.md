# GitHub Actions Deployment Setup

## Required Secrets

Add these secrets to your GitHub repository settings (Settings → Secrets and variables → Actions):

### Deployment Secrets

1. **DEPLOY_HOST** - Your server hostname or IP address
   ```
   Example: example.com or 192.168.1.100
   ```

2. **DEPLOY_USER** - SSH username for your server
   ```
   Example: root or your-username
   ```

3. **DEPLOY_KEY** - Your private SSH key for server access
   ```
   Generate with: ssh-keygen -t rsa -b 4096 -C "github-actions"
   Then add the public key to your server's ~/.ssh/authorized_keys
   ```

4. **DEPLOY_PATH** - Deployment path on your server
   ```
   Example: /var/www/html or /home/user/public_html
   ```

## Server Requirements

Your deployment server must have:
- Python 3.x installed
- PHP installed
- Web server (Apache/Nginx) configured
- SSH access enabled
- rsync installed

## Testing Deployment

1. Set up all secrets in GitHub repository settings
2. Push to the main branch or manually trigger the workflow
3. Monitor the Actions tab for deployment status

## Local Testing

Before deploying, test locally:
```bash
pnpm install
pnpm run build
pnpm run preview
```

Ensure Python and PHP components work locally before deploying.

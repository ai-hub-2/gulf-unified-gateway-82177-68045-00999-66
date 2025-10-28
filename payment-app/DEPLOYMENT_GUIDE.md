# Payment App Deployment Guide

This guide explains how to deploy the standalone payment application.

## Quick Deploy to Netlify

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Select the `payment-app` folder as the base directory

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Environment Variables**
   - Add any required environment variables in Netlify dashboard
   - Supabase URL and keys if needed

4. **Deploy**
   - Click "Deploy site"
   - Your payment app will be available at the provided URL

## Manual Deployment

1. **Build the App**
   ```bash
   cd payment-app
   npm install
   npm run build
   ```

2. **Upload to Hosting**
   - Upload the contents of the `dist` folder to your hosting service
   - Ensure all routes redirect to `index.html` for SPA routing

## Custom Domain

1. **Configure Domain**
   - In Netlify dashboard, go to Domain settings
   - Add your custom domain
   - Configure DNS records as instructed

2. **SSL Certificate**
   - Netlify automatically provides SSL certificates
   - Ensure HTTPS is enforced

## Environment Configuration

The payment app uses the same environment variables as the main app:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_TELEGRAM_BOT_TOKEN`
- `VITE_TELEGRAM_CHAT_ID`

## Monitoring

- Check Netlify dashboard for build logs
- Monitor form submissions in Netlify Forms
- Check Telegram notifications for payment data

## Security Notes

- The payment app is designed to be secure and isolated
- All sensitive data is handled through secure forms
- Session storage is used for temporary data only
- No sensitive data is stored in the client

## Troubleshooting

1. **Build Failures**
   - Check Node.js version (should be 18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Routing Issues**
   - Ensure all routes redirect to index.html
   - Check Netlify redirects configuration

3. **Form Submissions**
   - Verify Netlify Forms are properly configured
   - Check form names match exactly
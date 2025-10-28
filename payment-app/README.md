# Payment App - منصة الدفع الآمن

This is a standalone payment application that handles all payment-related functionality for the shipping platform. It's completely separate from the main application and can be deployed independently.

## Features

- **Payment Recipient Form** - Customer information collection
- **Payment Details** - Payment summary and service details
- **Card Payment Form** - Secure credit card input
- **OTP Verification** - Two-factor authentication
- **Payment Receipt** - Confirmation and receipt generation

## Routes

- `/pay/:id/recipient` - Customer information form
- `/pay/:id/details` - Payment details and summary
- `/pay/:id/card` - Credit card input form
- `/pay/:id/otp` - OTP verification
- `/pay/:id/receipt` - Payment confirmation and receipt

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This app can be deployed independently to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Security Features

- Secure form handling with Netlify Forms
- Telegram integration for notifications
- Session storage for temporary data
- OTP verification system
- Card data protection

## Dependencies

- React 18
- TypeScript
- Tailwind CSS
- Radix UI components
- React Router
- React Query
- Supabase integration
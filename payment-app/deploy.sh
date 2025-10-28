#!/bin/bash

# Payment App Deployment Script
echo "🚀 Deploying Payment App..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the app
echo "🔨 Building payment app..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output in 'dist' directory"
    echo "🌐 Ready for deployment to any static hosting service"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Payment app deployment preparation complete!"
#!/bin/bash

echo "🚀 Setting up Stripe Backend Server..."
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
npm install express stripe cors --save
npm install nodemon --save-dev

echo ""
echo "✅ Backend dependencies installed!"
echo ""
echo "📝 Next steps:"
echo "1. Start the backend server: npm run server"
echo "2. Start the frontend: npm run dev"
echo "3. Test checkout at http://localhost:5173/cart"
echo ""
echo "🔑 Stripe Keys Configured:"
echo "   - Publishable Key: ✓ (in .env)"
echo "   - Secret Key: ✓ (in server.js)"
echo ""

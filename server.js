// Simple Express server for Stripe Checkout
// Run with: node server.js

import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

const app = express();

// Stripe configuration - Use environment variable for security
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'your_stripe_secret_key_here';
const stripe = new Stripe(stripeSecretKey);

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: '✅ Velocity Stripe Backend Server',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api/health',
      checkout: 'POST /api/create-checkout-session'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Stripe backend is running' });
});

// Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { lineItems, successUrl, cancelUrl } = req.body;

    console.log('Creating checkout session...');
    console.log('Line items:', lineItems.length);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
    });

    console.log('Checkout session created:', session.id);

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Stripe backend server running on http://localhost:${PORT}`);
  console.log(`✅ Ready to process checkout requests`);
});

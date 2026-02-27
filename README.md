# ⚡ VELOCITY - Premium Sportswear E-Commerce

A modern, high-performance e-commerce platform for sportswear built with React, TypeScript, and Tailwind CSS. Features a sleek design with dark mode support, smooth animations, and a complete shopping experience.

🌐 **Live Demo**: [https://velocity73.netlify.app](https://velocity73.netlify.app)  
📦 **Repository**: [https://github.com/Mostafa-SAID7/VELOCITY](https://github.com/Mostafa-SAID7/VELOCITY)

---

## ✨ Key Features

### 🛍️ Shopping Experience
- **Product Catalog**: 30+ diverse sportswear products (footwear, apparel, accessories, equipment)
- **Advanced Filtering**: Search, category filters, price range slider, and sorting options
- **Product Details**: Comprehensive product pages with image galleries, size selection, and related products
- **Shopping Cart**: Full cart management with quantity controls, size selection, and persistent storage
- **Demo Checkout**: Frontend-only checkout flow with order confirmation

### 🎨 User Interface
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Custom Tailwind animations (slide-in, fade-in, shimmer effects)
- **Skeleton Loaders**: Professional loading states instead of spinners
- **Toast Notifications**: Beautiful gradient notifications for user feedback
- **Empty States**: Engaging empty states with animations and helpful CTAs

### 📄 Pages & Navigation
- **Home**: Hero section, benefits, featured products, stats, categories, newsletter
- **Products**: Advanced filtering, sorting, grid/list view, pagination (6 per page)
- **Product Details**: Image gallery, size selection, favorite/share functionality
- **Story**: Company mission, vision, values, timeline (2020-2025)
- **Reviews**: Rating overview, filter by rating, customer testimonials
- **Cart**: Full cart management with checkout flow
- **Support**: Size guide, returns, shipping info, contact form
- **Legal**: Privacy policy and terms of service pages
- **404 Page**: Custom not found page with navigation shortcuts

### 🔧 Technical Features
- **TypeScript**: Full type safety across the application
- **React Router**: Client-side routing with proper SPA configuration
- **Context API**: Global state management (Cart, Theme, Toast)
- **Error Boundary**: Graceful error handling with fallback UI
- **Accessibility**: ARIA labels, keyboard navigation, form field associations
- **SEO Ready**: Proper meta tags and semantic HTML
- **Performance**: Code splitting, lazy loading, optimized images

---

## 🚀 Technologies

**Frontend Framework:**
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2

**Styling:**
- Tailwind CSS 3.4.1
- PostCSS 8.4.35
- Autoprefixer 10.4.18

**Routing & State:**
- React Router DOM 7.13.1
- React Context API

**UI & Icons:**
- Lucide React 0.344.0

**Payment Integration (Optional):**
- Stripe 20.4.0
- @stripe/stripe-js 8.8.0

**Backend (Optional):**
- Express 5.2.1
- CORS 2.8.6

**Development Tools:**
- ESLint 9.9.1
- TypeScript ESLint 8.3.0

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Mostafa-SAID7/VELOCITY.git
cd VELOCITY
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables (Optional)**
Create a `.env` file in the root directory for Stripe integration:
```env
VITE_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
```

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

---

## 🎯 Usage

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates optimized production build in `dist/` directory

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality

### Backend Server (Optional)
```bash
npm run server
```
Starts Express server for Stripe checkout integration

---

## 📁 Project Structure

```
VELOCITY/
├── public/
│   ├── vite.svg          # Custom favicon
│   └── _redirects        # Netlify SPA routing
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── CustomDropdown.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Skeleton.tsx
│   │   └── ErrorBoundary.tsx
│   ├── context/          # Global state management
│   │   ├── CartContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── ToastContext.tsx
│   ├── data/             # Static JSON data
│   │   ├── products.json
│   │   ├── categories.json
│   │   ├── testimonials.json
│   │   ├── sizes.json
│   │   └── stats.json
│   ├── pages/            # Route components
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── Cart.tsx
│   │   ├── Story.tsx
│   │   ├── Reviews.tsx
│   │   ├── SignIn.tsx
│   │   ├── Support.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── Success.tsx
│   │   └── NotFound.tsx
│   ├── services/         # API and business logic
│   │   ├── api.ts
│   │   └── checkout.ts
│   ├── utils/            # Utility functions
│   │   └── stripe.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .env                  # Environment variables
├── netlify.toml          # Netlify configuration
├── tailwind.config.js    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Lime (lime-500, lime-600)
- **Secondary**: Orange (orange-500, orange-600)
- **Gradients**: Lime to Orange for CTAs and accents
- **Dark Mode**: Gray scale (gray-800, gray-900)
- **Light Mode**: White and light grays

### Typography
- **Font Family**: System fonts for optimal performance
- **Headings**: Bold, gradient text for emphasis
- **Body**: Clean, readable text with proper contrast

### Animations
- **Slide In**: Smooth entrance animations
- **Fade In**: Subtle opacity transitions
- **Shimmer**: Loading state animations
- **Scale In**: Interactive element animations

---

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect Repository**
   - Link your GitHub repository to Netlify

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables**
   - Add Stripe keys if using payment integration

4. **Deploy**
   - Automatic deployments on push to main branch

The project includes `netlify.toml` and `public/_redirects` for proper SPA routing.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**M.Said**  
Portfolio: [https://m-said-portfolio.netlify.app](https://m-said-portfolio.netlify.app)

---

## 🙏 Acknowledgments

- Images from [Pexels](https://www.pexels.com)
- Icons from [Lucide React](https://lucide.dev)
- Inspiration from modern e-commerce platforms

---

## 📧 Support

For support, email or open an issue in the GitHub repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

# Foodie - Restaurant Delivery Platform

A comprehensive food delivery platform similar to Zomato and Swiggy, built with Next.js 14, TypeScript, and Tailwind CSS. Features both customer-facing interface and admin dashboard for complete restaurant management.

## 🚀 Features

### Customer Features
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Restaurant Discovery**: Browse restaurants by cuisine, rating, delivery time
- **Advanced Search & Filters**: Find restaurants and dishes quickly
- **Shopping Cart**: Add items, manage quantities, apply promo codes
- **Real-time Updates**: Live order tracking and notifications
- **Mobile Responsive**: Optimized for all device sizes

### Admin Features
- **Dashboard Analytics**: Revenue, orders, customer insights
- **Restaurant Management**: Add/edit restaurants and menus
- **Order Management**: Track and update order status
- **Customer Management**: View customer data and preferences
- **Revenue Tracking**: Detailed financial reports
- **Delivery Management**: Assign and track delivery personnel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd foodie-delivery
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
foodie-delivery/
├── app/                    # Next.js 14 App Router
│   ├── admin/             # Admin dashboard pages
│   ├── cart/              # Shopping cart page
│   ├── restaurants/       # Restaurant listing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── admin/            # Admin-specific components
│   ├── Header.tsx        # Main navigation
│   ├── Hero.tsx          # Landing page hero
│   ├── Categories.tsx    # Food categories
│   └── ...               # Other components
├── store/                # State management
│   └── cartStore.ts      # Shopping cart state
├── public/               # Static assets
└── ...config files
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Orange gradient (#f97316 to #ea580c)
- **Secondary**: Blue accent (#0ea5e9)
- **Neutral**: Gray scale for text and backgrounds

### Key Components
- **Responsive Grid Layouts**: Adapts to all screen sizes
- **Interactive Cards**: Hover effects and smooth transitions
- **Modern Forms**: Clean input fields with focus states
- **Loading States**: Skeleton screens and spinners
- **Toast Notifications**: User feedback for actions

## 🔧 Customization

### Adding New Restaurants
1. Navigate to `/admin/restaurants`
2. Click "Add Restaurant"
3. Fill in restaurant details
4. Upload images and set menu items

### Modifying Styles
- Edit `tailwind.config.js` for theme customization
- Update `app/globals.css` for global styles
- Modify component-specific styles in individual files

### Adding New Features
- Create new pages in the `app/` directory
- Add components in the `components/` directory
- Update state management in `store/` as needed

## 📱 Pages Overview

### Customer Pages
- **Home** (`/`): Hero section, categories, featured restaurants
- **Restaurants** (`/restaurants`): Full restaurant listing with filters
- **Cart** (`/cart`): Shopping cart and checkout process
- **Restaurant Detail**: Individual restaurant page with menu

### Admin Pages
- **Dashboard** (`/admin`): Analytics and quick actions
- **Orders** (`/admin/orders`): Order management
- **Restaurants** (`/admin/restaurants`): Restaurant management
- **Menu** (`/admin/menu`): Menu item management
- **Customers** (`/admin/customers`): Customer data
- **Analytics** (`/admin/analytics`): Detailed reports

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo
- **Railway**: Deploy with Docker
- **AWS/GCP**: Use container deployment

## 🔮 Future Enhancements

- **Real-time Chat**: Customer support integration
- **Payment Gateway**: Stripe/PayPal integration
- **GPS Tracking**: Live delivery tracking
- **Push Notifications**: Order updates
- **Multi-language**: Internationalization support
- **Dark Mode**: Theme switching
- **PWA**: Progressive Web App features

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: support@foodie.com
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

---

Built with ❤️ using Next.js and Tailwind CSS
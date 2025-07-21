# Travel Booker

A modern travel booking web application built with React and Vite. Discover, explore, and book amazing travel destinations around the world. The app is fully responsive, features a beautiful UI, and is installable as a Progressive Web App (PWA) for offline use.

---

## Features

- 🌍 **Browse Destinations:** View a curated list of travel destinations with images, details, and reviews.
- 🔍 **Search & Filter:** Easily search and filter destinations by name, location, price, and rating.
- 📝 **Booking System:** Book your favorite destinations directly from the app.
- 👤 **User Authentication:** Sign up, log in, and access a personalized dashboard.
- 🛠️ **Admin Dashboard:** Manage destinations and bookings (admin only).
- 📰 **Blog & Info Pages:** Read travel blogs, contact support, and view terms/privacy policies.
- 🖼️ **Rich Media:** Uses Unsplash for destination images and randomuser.me for user avatars.
- ⚡ **PWA Support:** Install the app on your device and use it offline.
- 🎨 **Bootstrap Icons:** Beautiful icons included via npm package.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   cd travelBooker-project
   npm run dev
   ```

3. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## Project Structure

```
src/
  assets/         # Static images and icons
  components/     # Reusable UI components (Navbar, Footer, etc.)
  context/        # React Context providers (Auth, Theme)
  data/           # Mock data for destinations and reviews
  pages/          # Main page components (Home, Destinations, Booking, etc.)
  App.jsx         # Main app component with routing
  main.jsx        # React entry point
public/
  favicon.svg     # App icon
  manifest.json   # PWA manifest
```

---

## PWA & Offline Support

- The app is a fully-featured PWA.
- After first load, the app and all previously viewed images (including Unsplash and randomuser.me avatars) are available offline.
- You can install the app on your device from Chrome, Edge, or supported mobile browsers.

---

## Deployment

The app has been deployed to [Vercel](https://vercel.com/) hosting provider.

---

## Live Demo

- [Try Travel Booker on Vercel](https://travel-booker-project.vercel.app/)

## Credits

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Unsplash](https://unsplash.com/) (for images)
- [randomuser.me](https://randomuser.me/) (for avatars)

---

## Author

- [Sudip Bag](https://github.com/Sudip294)




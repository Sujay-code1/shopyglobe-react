ShoppyGlobe E-commerce Application
ShoppyGlobe is a modern e-commerce web application built using React, Redux, React Router, and Tailwind CSS. It allows users to browse products, view product details, add items to the cart, and manage their shopping cart.

Features
Home Page: Displays a list of products fetched from an external API.
Product Detail Page: Detailed information about a selected product.
Shopping Cart: Add, remove, and update product quantities in the cart.
Search Functionality: Filter products based on search queries.
404 Page: Displays a custom "Page Not Found" for unknown routes.
Responsive Design: Mobile-friendly layout using Tailwind CSS.
Tech Stack
React: Functional components with hooks (useState, useEffect).
Redux: State management for the shopping cart.
React Router: Client-side routing for navigation.
Tailwind CSS: Utility-first styling for responsive design.
API: Product data is fetched from DummyJSON API.
Folder Structure
less
Copy
Edit
src/
├── App.js                 // Main application component with routing
├── index.js               // ReactDOM rendering and Redux store provider
├── components/            // All reusable components
│   ├── Header.js          // Navigation bar with links and cart icon
│   ├── NotFound.js        // 404 page for unknown routes
│   ├── ProductList.js     // Lists all products (fetches from API)
│   ├── ProductItem.js     // Represents a single product with "Add to Cart"
│   ├── ProductDetail.js   // Detailed view of a selected product
│   ├── Cart.js            // Displays items in the cart
│   └── CartItem.js        // Single item representation in the cart
├── redux/                 // Redux state management
│   ├── store.js           // Redux store configuration
│   └── slices/            // Cart slice for managing cart state
└── hooks/                 // Custom React hooks
    └── useFetchProducts.js // Custom hook to fetch product list
Installation
Clone the repository:
bash
Copy
Edit
git clone https://github.com/YOUR_GITHUB_USERNAME/ShoppyGlobe.git
cd ShoppyGlobe
Install dependencies:
bash
Copy
Edit
npm install
Usage
Start the development server:
bash
Copy
Edit
npm run dev
Open http://localhost:5173 to view the app in your browser.

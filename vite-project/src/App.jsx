import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import { Loader } from 'lucide-react';

// Lazy loaded components
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Payment = lazy(() => import('./components/Payment'));
const PaymentSuccess = lazy(() => import('./components/PaymentSuccess'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  const handleSearch = (query) => {
    // Search functionality will be implemented here
    console.log('Searching for:', query);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header onSearch={handleSearch} />
          <main className="pt-20">
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <Loader className="h-8 w-8 animate-spin text-blue-600" />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Payment />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
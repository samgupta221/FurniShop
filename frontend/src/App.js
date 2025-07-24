import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      {/* Wrap everything in a flex column layout to keep footer at the bottom */}
      <div className="d-flex flex-column min-vh-100">
        
        {/* Navbar stays at the top across all pages */}
        <Navbar />

        {/* Main content changes per route */}
        <main className="flex-grow-1">
          <Routes>
            {/* Landing page */}
            <Route path="/landing" element={<LandingPage />} />

            {/* Home page (products) */}
            <Route path="/" element={<HomePage />} />

            {/* Dynamic product page */}
            <Route path="/product/:id" element={<ProductPage />} />

            {/* Authentication pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

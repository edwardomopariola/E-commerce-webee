import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/shopping-logo.svg';
import Shop from './pages/Shop';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/link" element={Link} />
        <Route path="/logo" element={logo} />
      </Routes>
      </BrowserRouter>
      {/* <img src={logo} alt="Shopping Logo" /> */}
    </div>
  );
}

import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from './Components/Footer/Footer';
import menBanner from "./Assets/banner_mens.png";
import womenBanner from "./Assets/banner_women.png";
import kidsBanner from "./Assets/banner_kids.png";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />

        <Route
          path="/men"
          element={<ShopCategory banner={menBanner} category="men" />}
        />

        <Route
          path="/women"
          element={<ShopCategory banner={womenBanner} category="women" />}
        />

        <Route
          path="/kids"
          element={<ShopCategory banner={kidsBanner} category="kids" />}
        />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App  

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Cart from "./pages/Cart";
import Cakes from "./pages/Cakes";
import Breads from "./pages/Breads";
import Desserts from "./pages/Desserts";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/breads" element={<Breads />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

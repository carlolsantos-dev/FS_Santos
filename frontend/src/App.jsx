import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Team from "./pages/Team";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

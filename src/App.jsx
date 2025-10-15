import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./AddToCart";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<AddToCart />} />
        //{" "}
      </Routes>
    </div>
  );
};

export default App;
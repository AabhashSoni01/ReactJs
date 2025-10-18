import React from "react";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./AddToCart";
const App = () => {
  return (
    <div className="p-2">
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/cart" element={<AddToCart />} />
        //{" "}
      </Routes>
    </div>
  );
};

export default App;

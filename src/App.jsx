import React from "react";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./AddToCart";
import RecipeInfo from "./RecipeInfo";
const App = () => {
  return (
    <div className="p-2">
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/recipeInfo" element={<RecipeInfo />} />
        //{" "}
      </Routes>
    </div>
  );
};

export default App;

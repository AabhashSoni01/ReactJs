import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import './index.css'

function Product() {
  const [filtered, setFiltered] = useState([]);
  const [sortType, setSortType] = useState("");

  // Fetch all products initially
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setFiltered(data.products);
      });
  }, []);

  // Handle search
  const handleSearch = (query) => {
    if (!query.trim()) {
      alert("Search cannot be empty!");
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setFiltered(data.products))
      .catch((err) => console.error("Search error:", err));
  };

  // Handle sorting
  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...filtered];

    if (type === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (type === "rating-asc") {
      sorted.sort((a, b) => a.rating - b.rating);
    } else if (type === "rating-desc") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setFiltered(sorted);
  };

  return (
    <div className="app-container flex flex-col items-center w-screen h-screen p-12">
      <h1 className="text-3xl font-bold text-black">🛍️ Product Listing</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="sort-controls flex justify-between h-25 w-[90%] border-2 border-purple-900 text-slate-800 rounded-md p-4 shadow-md shadow-slate-400">
        <label>Sort by: </label>
        <select onChange={(e) => handleSort(e.target.value)} value={sortType} className="border-0 outline-0">
          <option value="" className="bg-amber-400">Select</option>
          <option value="price-asc">Price (Low → High)</option>
          <option value="price-desc">Price (High → Low)</option>
          <option value="rating-asc">Rating (Low → High)</option>
          <option value="rating-desc">Rating (High → Low)</option>
        </select>
      </div>

      <div className="product-grid grid grid-cols-3 gap-10 my-5">
        {filtered.length > 0 ? (
          filtered.map((item) => <ProductCard key={item.id} product={item} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Product;

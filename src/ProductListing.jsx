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
      <h1 className="text-2xl font-bold text-black">🛍️ Product Listing</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="sort-controls h-25 w-150 p-3 border-1 border-purple-800">
        <label>Sort by: </label>
        <select onChange={(e) => handleSort(e.target.value)} value={sortType}>
          <option value="">Select</option>
          <option value="price-asc">Price (Low → High)</option>
          <option value="price-desc">Price (High → Low)</option>
          <option value="rating-asc">Rating (Low → High)</option>
          <option value="rating-desc">Rating (High → Low)</option>
        </select>
      </div>

      <div className="product-grid">
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

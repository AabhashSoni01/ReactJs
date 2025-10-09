import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar flex justify-between text-black border-1 border-purple-900 w-150 rounded-md p-2 my-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-slate-700 p-2"
      />
      <button type="submit" className="bg-blue-700 text-white">Search</button>
    </form>
  );
}

export default SearchBar;

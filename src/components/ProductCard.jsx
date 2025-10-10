function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="flex flex-col justify-center p-2 my-5 rounded-md bg-cyan-600 shadow-xl shadow-slate-500 hover:scale-105 transition ease-in">
        <img src={product.thumbnail} alt={product.title} />
        <div className="card-info flex flex-col justify-center items-center text-black text-xl p-1">
          <h3>{product.title}</h3>
          <p className="brand">{product.brand}</p>
          <p className="price">💲 {product.price}</p>
          <p className="rating">⭐ {product.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

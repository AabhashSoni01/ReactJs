function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card-info">
        <h3>{product.title}</h3>
        <p className="brand">{product.brand}</p>
        <p className="price">💲 {product.price}</p>
        <p className="rating">⭐ {product.rating}</p>
      </div>
    </div>
  );
}

export default ProductCard;

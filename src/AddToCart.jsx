import React, { useContext } from "react";
import Context from "./Context";

const AddToCart = () => {
  const { state } = useContext(Context);
  const cartItems = state.cart;

  return (
    <div className="text-black text-center">
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items from the Home page.</p>
      ) : (
        cartItems.map((item, index) => {
          return (
            <div key={item.id || index} id="card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>Rating: {item.rating}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AddToCart;

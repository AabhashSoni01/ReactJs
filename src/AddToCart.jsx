import React, { useContext } from "react";
import Context from "./Context";

const AddToCart = () => {
  const { state, dispatch } = useContext(Context);
  console.log(state.cart, "hello");

  return (
    <div>
      {state.cart.map((a, idx) => (
        <div id="card" key={a.id ?? idx}>
          <p>{a.name}</p>
          <p>Rating: {a.rating}</p>
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: a })}>
            add
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;

import React, { useContext } from "react";
import Context from "./Context";
import "./Recipe.css";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Recipe = () => {
  let { dispatch, state } = useContext(Context);

  const cartItemCount = state.cart.length;

  let navigate = useNavigate();

  function NewPage(index) {
    console.log("heyy");
    navigate(`/RecipeInfo/${index}`);
  }

  return (
    <div>
      <div className="mx-4">
        <Link to={"/cart"}>
          <button className="text-black">Cart ({cartItemCount})</button>
        </Link>
      </div>
      <>
        {state.apiData.map((a, index) => {
          return (
            <>
              <div id="card" key={index} onClick={() => NewPage(index)}>
                <div className="flex flex-col text-center text-black gap-1">
                  <img src={a.image} />
                  <p>{a.name}</p>
                  <p> Rating: {a.rating}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({type: "cart", payload: a})
                    }}
                  >
                    Add{" "}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </>
    </div>
  );
};

export default Recipe;

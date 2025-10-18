import React, { useContext } from "react";
import Context from "./Context";
import "./Recipe.css";
import "./index.css"
import { Link } from "react-router-dom";

const Recipe = () => {
  let { dispatch, state } = useContext(Context);

  return (
    <div>
      <div>
        <Link to={"/cart"}>
          <button className="text-black">Cart</button>
        </Link>
      </div>
      <>
        {state.apiData.map((a) => {
          return (
            <>
              <div id="card" >
                <div className="flex flex-col text-center text-black gap-1">
                  <img src={a.image} />
                  <p>{a.name}</p>
                  <p> Rating: {a.rating}</p>
                  <button
                    onClick={() => dispatch({ type: "cart", payload: a })}
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

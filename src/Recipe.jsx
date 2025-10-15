import React, { useContext } from "react";
import Context from "./Context";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  let { dispatch, state } = useContext(Context);

  return (
    <div>
      <div>
        <Link to={"/cart"}>
          <button>Cart</button>
        </Link>
      </div>
      <>
        {state.apiData.map((a) => {
          return (
            <>
              <div id="card">
                <img src={a.image} />
                <p>{a.name}</p>
                <p> Rating: {a.rating}</p>
                <button onClick={() => dispatch({ type: "cart", payload: a })}>
                  add{" "}
                </button>
              </div>
            </>
          );
        })}
      </>
    </div>
  );
};

export default Home;

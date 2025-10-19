import { createContext, useEffect, useReducer } from "react";

let Context = createContext();

export default Context;

const ContextP = ({ children }) => {
  let data = {
    apiData: [],
    cart: [],
  };

  function reduser(state, action) {
    if (action.type === "FETCH_DATA") {
      return {
        ...state,
        apiData: action.payload,
      };
    } else if (action.type == "cart") {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    } else if (action.type == "REMOVE_ITEM") {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    return state;
  }

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_DATA", payload: data.recipes });
      });
  }, []);

  let [state, dispatch] = useReducer(reduser, data);
  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export { ContextP };

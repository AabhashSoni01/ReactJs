import React from "react";
import { useContext } from "react";
import Context from "./Context";

const RecipeChild = () => {
  let data = useContext(Context);
  return <div>{data}</div>;
};

export default RecipeChild;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // import App from './Home.jsx'
// // import Product from './ProductListing.jsx'
// // import './index.css'

// import App from "./App.jsx";
// import { ContextP } from "./Context.jsx";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <BrowserRouter>   */}
//     <ContextP>
//       <App />
//     </ContextP>

//     {/* </BrowserRouter> */}
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ContextP } from "./Context.jsx";
import { BrowserRouter } from "react-router-dom";
import Week1 from "./Practice/week1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <ContextP>
        <App />
      </ContextP>
    </BrowserRouter> */}
    {/* <Week1 /> */}
  </StrictMode>
);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './Home.jsx'
import Product from './ProductListing.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Product />
  </StrictMode>,
)

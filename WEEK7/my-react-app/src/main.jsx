import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './MyApp.jsx'
import Product from './Product.jsx' 
import DiscountCalculator from './DiscountCalculator.jsx' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Welcome name= "prem"/>
    <DiscountCalculator productName="iphone 18 pro max" price={1499} /> 
  </StrictMode>
)

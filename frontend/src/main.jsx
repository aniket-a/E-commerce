import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import shopContextProvider from './Context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <shopContextProvider>
    <App />
  </shopContextProvider>
);

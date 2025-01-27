import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
// import './index.css';
import { createGlobal } from 'global';

if (typeof global === 'undefined') {
  window.global = createGlobal();
  console.log(global); // Should log an empty object or your custom global object
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

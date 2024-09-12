import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css'
import App from './App';

const container = document.getElementById('root'); // Ensure this element exists in your HTML
if (container) {
  const root = createRoot(container); // Use createRoot from react-dom/client
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

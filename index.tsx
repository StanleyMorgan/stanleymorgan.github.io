import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("Index.tsx: Module loaded, starting React mount...");

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Index.tsx: Root element found");
  const root = ReactDOM.createRoot(rootElement);
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Index.tsx: Render called successfully");
  } catch (err) {
    console.error("Index.tsx: Error during render:", err);
  }
} else {
  console.error("Index.tsx: Failed to find the root element 'root'");
}
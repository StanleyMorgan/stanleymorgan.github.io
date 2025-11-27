import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("Index: Script starting...");

const rootElement = document.getElementById('root');
console.log("Index: Root element found:", rootElement);

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    console.log("Index: Created React Root, attempting to render...");
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Index: Render called successfully");
  } catch (error) {
    console.error("Index: Fatal Error during render:", error);
  }
} else {
  console.error("Index: Failed to find #root element");
}

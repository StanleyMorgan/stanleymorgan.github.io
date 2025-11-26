import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log('index.tsx: Starting application...');

try {
  const rootElement = document.getElementById('root');
  console.log('index.tsx: Root element found:', rootElement);

  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  const root = ReactDOM.createRoot(rootElement);
  console.log('index.tsx: Created React root, attempting to render...');

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('index.tsx: Render called successfully');
} catch (err) {
  console.error('index.tsx: Fatal error during mounting:', err);
}
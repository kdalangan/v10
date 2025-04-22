// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './route'; // <-- adjust if your file is named AppRouter.tsx
import './index.css'; // ← Make sure this line is present

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

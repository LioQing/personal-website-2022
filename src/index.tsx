import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from "react-ga4";

ReactGA.initialize("G-2R4YG58N6L");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

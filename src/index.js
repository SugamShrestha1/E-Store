import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css'; // Import Tailwind CSS styles

// Create the root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render instead of ReactDOM.render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

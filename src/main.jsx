import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import UserReducer from './slice/UserReducer.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

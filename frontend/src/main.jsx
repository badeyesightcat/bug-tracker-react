import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// Reducers
import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/userSlice';

// Redux configuration
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

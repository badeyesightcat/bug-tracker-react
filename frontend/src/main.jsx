import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// Reducers
import authReducer from './controllers/redux/authSlice';
import bugReducer from './controllers/redux/bugSlice';
import userReducer from './controllers/redux/userSlice';

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

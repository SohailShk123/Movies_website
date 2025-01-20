import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

axios.defaults.baseURL = `https://api.themoviedb.org/3`
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)

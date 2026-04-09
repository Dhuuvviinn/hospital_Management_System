import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./css/base.css"
import "./css/site.css"
import "./css/dashboard.css"
import store from './store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

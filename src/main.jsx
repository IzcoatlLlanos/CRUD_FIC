/*import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import AppAllModules from './AppAllModules'
import './index.css'
import './share/css/allPages.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './share/css/allPages.css'
//FIC: Add
import AppAllModules from './AppAllModules';
//import AppDemo from './AppDemo';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppAllModules />
    {/*  <AppDemo />  */}
  </React.StrictMode>,
)

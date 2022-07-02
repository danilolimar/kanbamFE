import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import GlobalStyles from '@mui/material/GlobalStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <GlobalStyles styles={{body: { padding: "0", margin: "0"}}} />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

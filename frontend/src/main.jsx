import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import './global.css'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <>
    <ToastContainer/>
    <App/>
    </>
)
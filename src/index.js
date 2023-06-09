import React from 'react';
import { createRoot } from "react-dom/client";
//import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App/App';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home.js';
import Contact from './pages/Contact/Contact';
import Dynamic from './pages/Dynamic/Dynamic';
import NoPage from './pages/NoPage/NoPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/gtbrg-website" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dynamic/:id" element={<Dynamic />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

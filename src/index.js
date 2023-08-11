import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './components/Main-page';
import PropertiesPage from './components/Properties';
import inquirePage from './components/Inquire';
import ContactPage from './components/ContactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
    <PropertiesPage />
    <inquirePage />
    <ContactPage />
  </React.StrictMode>
);


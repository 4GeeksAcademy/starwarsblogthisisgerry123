import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "../index.css"; 
import Layout from './layout';

const root = createRoot(document.getElementById("app")); // Ensure this ID matches the div in your HTML

root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

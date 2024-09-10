import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './app.js';


const domNode = document.querySelector('.mane');
const root = createRoot(domNode);
root.render(<App />);
import React from "react";
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './app.js';


const domNode = document.querySelector('.container');
const root = createRoot(domNode);
root.render(<App />);
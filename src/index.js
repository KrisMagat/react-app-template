require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.scss';

const appElement = createRoot(document.getElementById('app'));

appElement.render(<App />);

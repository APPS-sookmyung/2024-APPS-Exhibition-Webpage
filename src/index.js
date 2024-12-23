import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  exhibitionStyles,
  pretendardFont,
  dolcevitaFont,
  resetStyles,
} from './styles';
import { css } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      styles={css`
        ${resetStyles}
        ${exhibitionStyles}
        ${pretendardFont}
        ${dolcevitaFont}
      `}
    />
  </React.StrictMode>,
);

reportWebVitals();

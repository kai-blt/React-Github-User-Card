import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
    
  
  /* BASE CSS START */
  
  /* font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Slab', serif; */


  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    min-height: 100vh;   
    width: 80%;
    margin: auto;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    background-color: #282c34;    
    color: white;
  }

  h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 6rem;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:visited {
      color: #fff;
    }
    &:hover {
      color: #222;
      transition: all 0.25s ease-in-out
    }
    transition: all 0.25s ease-in-out
  }

`;


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(React.version)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const element = document.createElement("h2")
// element.className = "dummy"
// element.textContent = "the h2 context"

// document.body.appendChild(element)

// console.dir(element)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const root = document.getElementById("root") //div

//In React element is the smallest building block
const element = React.createElement("h2", {}, "Hello world!")

createRoot(root).render(element)

console.dir(element)
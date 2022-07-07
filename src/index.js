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
const element = React.createElement("h2", {}, "Hello world!") //object <h2>Hello world!</h2>

// JSX

const reactRoot = createRoot(root)

reactRoot.render(element)

//Children

// <ul>
//   <li>First item</li>
//   <li>Second item</li>
// </ul>

const list = <ul>
  <li>First item</li>
  <li>Second item</li>
</ul>

// ASI - Automatic Semicolon Insert - 
// Java will add semicolon to the below funtion,
//  therefore will create problems

// function getList() {
//   return <ul>
//   <li>First item</li>
//   <li>Second item</li>
//   </ul>
// }

// To fix the above we can put the JSX in brackets
function getList() {
  return (
  <ul>
    <li>First item</li>
    <li>Second item</li>
  </ul>)
}


const title = <h1 id="brand-title">Title</h1>
const h2 = "<h2>Hello world!</h2>"

function getTitle() {
  return <h1 id="brand-title">Title</h1>
}

function conditionalReturn(is_open) {
  if (is_open) {
    return <h1>Open</h1>
  } else {
    return <h1>Closed</h1>
  }
}

reactRoot.render(<h1>You've {2 + 10} notifications as of {new Date().getTime()}</h1>)

// Attribute expressions

const limit = 5

reactRoot.render(<input type="number" max={limit} />)

/*
<li id="item-1"></li>
<li id="item-2"></li>
<li id="item-3"></li>
*/

/*
<li id="item-" + count></li>
<li id={`item-${count}}`></li>
*/

// Upper Camel Case
// A function is a component in ReactJS
// The first letter for the function is written in 
// Caps Lock, this allows React to differentiate other tags
// Footer vs footer
// React will use the upper character

function Footer()
{
    return (
        <div>
            <h3>Company Name</h3>
            <p>All Rights Reserved</p>
        </div>
    )
}

//self clossing tags
// img -> <img src="" width="" etc=""/>
// These are also valid for ReactJS

//The following 2 lines are going to perform the same:
const footerComponent = <Footer/>
const footerComponentNew = React.createElement(Footer, {})

function Button()
{ 
  // infinite loop
  return <Button></Button>
}

console.dir(element)

reactRoot.render(<App/>)
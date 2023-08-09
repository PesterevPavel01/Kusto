import React from 'react';
import ReactDOM from 'react-dom/client';
import './../src/pages/index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Main from './Main';
import Footer from './Footet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <div className="main-page">

    <Header/>
    <Main/>
    <Footer/>

  </div>

  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

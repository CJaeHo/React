import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import FirstApp from './components/FirstApp';
//import SecondApp from './components/SecondApp';
import ThirdApp from './components/ThirdApp';
import FourthApp from './components/FourthApp';
import FifthApp from './components/FifthApp';
import SixthApp from './components/SixthApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FirstApp/>   같이적어도 됨!! */}
    {/* <SecondApp/> */}
    <ThirdApp/>
    <FourthApp/>
    <FifthApp/>
    <SixthApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

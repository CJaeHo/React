import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>          // 클래스일 때는 문제가 되지만 훅스일때는 없어도 에러가 안남. 이거는 호출이 여러번되서 한번만 되게끔 해줄라고 주석처리한거임
    <App />
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

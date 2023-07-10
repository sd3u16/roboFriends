import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import Card from './Card'
import {robots} from "./robots";
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(
           <React.StrictMode>

            <App/>


           </React.StrictMode>


      )

    /*
    robots.forEach((values, index) => {
            root.render(

        }
    );

*/
    reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


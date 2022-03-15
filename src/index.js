import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TrackerProvider} from './context/GeneralContext'
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId='5a07ff41-2afd-444d-8e74-58c979341290' language="en-US">
    <TrackerProvider>
      <App />
    </TrackerProvider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

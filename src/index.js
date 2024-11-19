import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentList from './components/step03/CommentList';
import Welcome from './components/step03/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2/> */}
    <CommentList />
    <Welcome name='hong'/>
    <Welcome name='park'/>
  </React.StrictMode>
);

reportWebVitals();

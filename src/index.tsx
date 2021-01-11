import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NumberToBoardApp from './NumberToBoardApp';
import RandomHighlightApp from './RandomHighlightApp';
import reportWebVitals from './reportWebVitals';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li><Link to="/number-to-board">符号から将棋盤の位置をタップ</Link></li>
        <li><Link to="/board-to-number">将棋盤の位置をランダムでハイライト</Link></li>
      </ul>
      <Route path="/number-to-board" component={NumberToBoardApp} />
      <Route path="/board-to-number" component={RandomHighlightApp} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

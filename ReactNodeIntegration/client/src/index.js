import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '../src/Components/button/Button'
import Component1 from '../src/Components/Component1';
import Component2 from '../src/Components/Component2';
import { Provider } from 'react-redux';
import store from './Components/store/Store'
import Counter from './Components/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      {/* <Button />
      <Component1 />
      <Component2 /> */}
      <Counter/>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

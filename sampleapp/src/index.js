import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseStateHook from './components/UseStateHook';
import UseEffectHook from './components/useEffectHook';
import CustomHookData from './components/CustomHookData';
import CounterParent from './components/CounterParent';
import ErrorBoundaryContainer from './components/ErrorBoundaryContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <UseStateHook /> */}
    {/* <UseEffectHook name="useEffectHook"/> */}
    {/* <UseEffectHook name="useEffectHook1"/> */}
    {/* <useFetchCustomHook url="https://jsonplaceholder.typicode.com/posts"/> */}
    {/* <CustomHookData/> */}
    {/* <CounterParent/> */}
    <ErrorBoundaryContainer/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

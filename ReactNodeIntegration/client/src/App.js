import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [response,setResponse] = useState("");
  useEffect(()=>{
      fetch('http://localhost:3002/testAPI')
      .then(res => res.text())
      .then(result => setResponse(result))
      .catch(error => console.error(error))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {response}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

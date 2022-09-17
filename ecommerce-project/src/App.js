import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
function App() {
  return (
    <div>
       <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={[<Header/>,<Home/>,<Footer/>]}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
       </Routes>
    </div>
  );
}

export default App;

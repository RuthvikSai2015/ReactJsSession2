import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Hello,{Welcome} from './components/Hello'
import Capital from './components/Capital';
import Clock from './components/Clock';
function App() {
  return (
    <div className="App">
        <Header company="ABC"/>
        <h1>My Home Page</h1>
        <Clock/>
        <Footer link="facebook"/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
        <Header company="ABC"/>
        <h1>My Home Page</h1>
        <Footer link="facebook"/>
    </div>
  );
}

export default App;

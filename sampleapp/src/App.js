import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Hello,{Welcome} from './components/Hello'
import Capital from './components/Capital';
import Clock from './components/Clock';
import TraceComponent from './components/TraceComponent';
import Greeting from './components/Greet';
import CheckEligibility from './components/EligibilityComponent';
function App() {
  const sampleData = {
    componentname:'trace3',
    title:'title3',
    name:'name3'
  }
  return (
    <div className="App">
        <Header/>
        {/* <h1>My Home Page</h1> */}
        <TraceComponent  title="Child Component" name="Home Trace" showTitle number={1}/>
        <TraceComponent  title="Child Component1" name="Home Trace1" showTitle number={2}/>
        {/* <TraceComponent componentname={sampleData.componentname} title={sampleData.title} name={sampleData.name}/> */}
        <TraceComponent {...sampleData}/> 
        {/* <TraceComponent/>   */}
        {/* <Clock/> */}
        <Greeting isLoggedIn={true}/>
        <CheckEligibility age={20}/>
        <Footer link="facebook"/>
    </div>
  );
}

export default App;

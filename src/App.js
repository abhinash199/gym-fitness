
import './App.css';
import Header from './components/header';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Membership from './components/Membership';
import Register from './components/Register';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Facilities from './components/Facilities';
function App() {
  return (
    <div className="App">
       <Header/>
      <Switch>

        
        <Route path="/" component={Homepage} exact />
         <Route path="/membership" component={Membership} />
         <Route path="/our-facilities" component={Facilities} />
                
         <Route path="/register" component={Register} exact/>
         <Route path="/about" component={About} exact/>
      </Switch>
     
    
    </div>
  );
}

export default App;

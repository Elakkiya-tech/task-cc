import Head from './Component/Firstpage/Head';
import './App.css';
// import Head1 from './Component/Karthick/Head1';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import First from './Component/Firstpage/First';
import Create from './Component/Sweatha/Create';
import Content  from './Component/Secondpage/Content';


import Doc from './Component/Karthik/doc';
// import Join from './Component/Karthick/Join';
// import Empid from './Component/Karthick/Empid';
// import Cheq from './Component/Karthick/Cheq';
import Navbar from './Component/Karthik/Navbar';
// import { Navbar } from 'react-bootstrap';
function App() {
    
  return (
    <div className="App">
 
     <Router>
   
       <Route path='/' exact component={Navbar}/>
       <Route path='/Doc' exact component= {Doc}/>
       <Route path='/First' exact component={First}/>
       
      <Route path='/Head' exact component={Head}/>
   
      <Route path='/Content' exact component={Content}/>
      <Route path='/Create' exact component={Create}/>
    
      
      
    
      </Router>
      
      
     
    </div>
  );
}

export default App;

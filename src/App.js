
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';
import Timetable from './components/Timetable';
import UserDetails from './components/UserDetails';

function App() {


  return (

    <Router>
      <div className="App">
        <Navbar/>

        <div className="content">
        <Switch> 

          <Route exact path="/"> 
            <Home/>
          </Route>

          <Route exact path="/create"> 
            <Create/>
          </Route>

          <Route exact path="/timetable"> 
            <Timetable/>
          </Route>
          
          <Route exact path="/users/:id"> 
            <UserDetails/>
          </Route>

        </Switch>  
        </div>
      
      </div>
    </Router>
  );
}

export default App;

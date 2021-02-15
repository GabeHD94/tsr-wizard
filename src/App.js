import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sensors from './components/pages/Sensors/Sensors';
import Panels from './components/pages/Panels/Panels';
import Cameras from './components/pages/Cameras/Cameras';
import Zwave from './components/pages/Zwave/Zwave';
import Apps from './components/pages/Apps/Apps';
import Other from './components/pages/Other/Other';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/sensors' component={Sensors}/>
        <Route path='/panels' component={Panels}/>
        <Route path='/cameras' component={Cameras}/>
        <Route path='/zwave' component={Zwave}/>
        <Route path='/apps' component={Apps}/>
        <Route path='/other' component={Other}/>
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>
      Home Page
    </h1>
  </div>
);
export default App;

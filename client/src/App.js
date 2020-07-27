import React from 'react';
import './App.css';
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greetings from './components/Greetings';
import NavBar from './components/Nav'
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import PageNotFound from './components/404'
import { hot } from 'react-hot-loader/root';
function App() {
  return (
    <div className="App">

      <Router>
      <NavBar/>
        <Switch>
          <PublicRoute restricted={false} path='/register' exact component={Register} />
          <PublicRoute restricted={true} path='/' exact component={Login} />
          <PrivateRoute path='/welcome' exact component={Greetings} />
          <Route  path="*" component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);

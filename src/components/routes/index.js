import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../Home'
import { Hello} from '../Hello'
import Counter from '../../containers/counter';
import NoMatch from '../NoMatch'
import NavBar from '../NavBar'
import Hooks from '../../containers/hooks';
import Auth from '../../containers/auth';

const Cntr = Counter.components.Main;
const Hook = Hooks.components.Main;
const Pingpong = Counter.components.Pingpong;
const Login = Auth.components.Login;
const Routes = () =>{
  console.log('d');
  return (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Cntr} />
      <Route path="/hook" component={Hook} />
      <Route path="/pingpong" component={Pingpong} />
      <Route path="/login" component={Login} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)
  }

export default Routes

import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import { Hello} from '../components/Hello'
import Counter from '../containers/counter';
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import Hooks from '../containers/hooks';

const Cntr = Counter.components.Main;
const Hook = Hooks.components.Main;
const Pingpong = Counter.components.Pingpong;
const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Cntr} />
      <Route path="/hook" component={Hook} />
      <Route path="/pingpong" component={Pingpong} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes

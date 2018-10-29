import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Counter from '../containers/counter';
import Pingpong from '../components/Pingpong'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const Main = Counter.components.Main;
const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Main} />
      <Route path="/pingpong" component={Pingpong} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes

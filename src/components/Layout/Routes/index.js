
import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../../Home'
import { Hello} from '../../Hello'
import Counter from '../../../containers/counter';
import NoMatch from '../../NoMatch'
import Hooks from '../../../containers/hooks';
import Auth from '../../../containers/auth';
import Recomp from '../../../containers/recomp';

const Cntr = Counter.components.Main;
const Hook = Hooks.components.Main;
const Recmp = Recomp.components.Main;
const Slider = Hooks.components.Slider;
const Pingpong = Counter.components.Pingpong;
const Login = Auth.components.Login;

const Routes = ()=>{

    return (
        <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Cntr} />
      <Route exact path="/hook" component={Hook} />
      <Route path="/hook/slider" component={Slider} />  
      <Route exact path="/recomp" component={Recmp} />   
      <Route path="/pingpong" component={Pingpong} />
      <Route path="/login" component={Login} />
      <Route component={NoMatch} />
    </Switch>
    )
}
export default Routes;
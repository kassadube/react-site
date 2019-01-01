
import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../../Home'
import { Hello} from '../../Hello'
import Counter from '../../../containers/counter';
import NoMatch from '../../NoMatch'
import Hooks from '../../../containers/hooks';
import Auth from '../../../containers/auth';
import Recomp from '../../../containers/recomp';
import Fleet from '../../../containers/fleet';
import Test from '../../../containers/test';

const Cntr = Counter.components.Main;
//const Hook = Hooks.components.Main;
//const Recmp = Recomp.Page;
//const Slider = Hooks.components.Slider;
const Pingpong = Counter.components.Pingpong;
const Login = Auth.components.Login;
const SignOut = Auth.components.SignOut;

const Routes = ()=>{

    return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Cntr} />
      <Route exact path="/hook" component={Hooks.pages.Main} />
      <Route path="/hook/slider" component={Hooks.pages.Slider} />  
      <Route exact path="/recomp" component={Recomp.Page.CardShow} />   
      <Route exact path="/recomp/plain" component={Recomp.Page.Plain} />  
      <Route exact path="/recomp/resite" component={Recomp.Page.Resite} /> 
      <Route exact path="/recomp/toggle" component={Recomp.Page.ToggleApp} /> 
      <Route exact path="/recomp/reducer" component={Recomp.Page.ReducerApp} /> 
      <Route exact path="/recomp/siterec" component={Recomp.Page.SiteRec} /> 
      <Route exact path="/recomp/ConnectedApp" component={Recomp.Page.ConnectedApp} /> 
      <Route exact path="/recomp/rxjspg" component={Recomp.Page.Rxjspg} /> 
      <Route path="/pingpong" component={Pingpong} />
      <Route path="/login" component={Login} />
      <Route path="/fleet" component={Fleet.pages.Main} />
      <Route path="/test" component={Test.pages.Main} />
      <Route path="/signOut" component={SignOut} />
      <Route component={NoMatch} />
    </Switch>
    )
}
export default Routes;
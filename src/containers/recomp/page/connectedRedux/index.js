import React from 'react';
import { compose, withState, withHandlers }  from 'recompose';

import Header from '../../components/header';

const withToggle = compose(
    withState('toggledOn', 'toggle', false),
    withHandlers({
      show: ({ toggle }) => (e) => toggle(true),
      hide: ({ toggle }) => (e) => toggle(false),
      toggle: ({ toggle }) => (e) => toggle((current) => !current)
    })
  )


  const StatusList = () =>
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

  const Status = withToggle(({ status, toggledOn, toggle }) =>
  <span onClick={ toggle }>
    { status }
    { toggledOn && <StatusList /> }
  </span>
);

const Tooltip = withToggle(({ text, children, toggledOn, show, hide }) =>
  <span>
    { toggledOn && <div className="Tooltip">{ text }</div> }
    <span onMouseEnter={ show } onMouseLeave={ hide }>{ children }</span>
  </span>
);

const User = ({ name, status }) =>
  <div className="User">
    <Tooltip text="Cool Dude!">{ name }</Tooltip>—
    <Status status={ status } />
  </div>;

const ConnectedApp = () =>
    <div className="PD10">        
        <div className="app-container">
            <Header headerName="Plain"/>
            <div>
                <User name="Tim" status="active" />
            </div>
        </div>
    </div>;


  export default ConnectedApp;
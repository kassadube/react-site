import React from 'react';
import debug from 'debug';
import Log from '../../../../../constants/log';

class Button extends React.Component {

  constructor(props)
  {
      super(props); 
      this.log = Log('Rxjsmove:button');  
      this.log.info('constructor',props);      
  }
  static getDerivedStateFromProps(props, state)
  {
    Log('Rxjsmove:button').info('getDerivedStateFromProps');  
    
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    this.log.info('shouldComponentUpdate');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    this.log.info('shouldComponentUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    this.log.info('componentDidUpdate');
  }

  componentDidMount(){
    this.log.info('componentDidMount');
  }

  componentWillUnmount(){

    this.log.info('componentWillUnmount');
  }

  render ()
  {
    this.log.info('render');
      return (
        <div>button</div>
      )
  }
}


  export default Button;

import React from 'react'

const LogProps = (WrappedComponent) =>{
    console.log("FFFFF");
    return class extends React.Component {
        constructor(){
            console.log("ddddd");
        }
      componentWillReceiveProps(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
      }
      render() {
        // Wraps the input component in a container, without mutating it. Good!
        return <WrappedComponent {...this.props} />;
      }
    }
  }
  export default LogProps;
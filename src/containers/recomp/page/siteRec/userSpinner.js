import React from 'react';
import { compose, lifecycle, branch, renderComponent  }  from 'recompose';

import Header from '../../components/header';

const withUserData = lifecycle({
  state: { loading: true },
  componentDidMount() {
    this._isMounted = true;
    fetchData().then((data) =>{
      if(this._isMounted)
        this.setState({ loading: false, ...data })
    });
  },
  componentWillUnmount() {
    this._isMounted = false;
  }
});

const Spinner = () =>
  <div className="Spinner">
    <div className="loader">Loading...</div>
  </div>;

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
);

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading
);


const UserT = ({ name, status }) =>
  <div className="User">{ name }—{ status }</div>

  const User = enhance(UserT);

const UserSpinner = () =>
  <div>
    <Header headerName="User Spinner" showMenu={false}/>
    <div className="App">    
      <div>
        <User />
      </div>       
    </div>
  </div>;
  
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: "Tim", status: "active" }), 3000);
    });
  
  }
  export default UserSpinner;
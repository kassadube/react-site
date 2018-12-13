import React from 'react';
import { compose, lifecycle, branch, renderComponent  }  from 'recompose';

import Header from '../../components/header';

const User = ({ name, status }) =>
  <div className="User">{ name }—{ status }</div>;

const withUserData = lifecycle({
  state: { loading: true },
  componentDidMount() {
    fetchData().then(
      (users) => this.setState({ users, loading: false }),
      (error) => this.setState({ error, loading: false })
    );
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

const UNAUTHENTICATED = 401;
const UNAUTHORIZED = 403;
const errorMsgs = {
  [UNAUTHENTICATED]: 'Not Authenticated!',
  [UNAUTHORIZED]: 'Not Authorized!',
};

const AuthError = ({ error }) =>
  error.statusCode &&
    <div className="Error">{ errorMsgs[error.statusCode] }</div>;

const NoUsersMessage = () =>
  <div>There are no users to display</div>;

const hasErrorCode = ({ error }) => error && error.statusCode;
const hasNoUsers = ({ users }) => users && users.length === 0;

const nonOptimalStates = (states) =>
  compose(...states.map(state =>
    branch(state.when, renderComponent(state.render))));

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading,
  nonOptimalStates([
    { when: hasErrorCode, render: AuthError },
    { when: hasNoUsers, render: NoUsersMessage }
  ])
);

const UserList = enhance(({ users, error }) =>
  <div className="UserList">
    { users && users.map((user) => <User {...user} />) }
  </div>
);

const UserMessage = () =>
  <div>
    <Header headerName="User message" showMenu={false}/>
    <div className="App">    
      <div>
        <UserList />
      </div>       
    </div>
  </div>;
  
  // Mock Service
const noUsers = [];
const users = [
  { name: "Tim", status: "active" },
  { name: "Bob", status: "active" },
  { name: "Joe", status: "inactive" },
  { name: "Jim", status: "pending" },
];
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject({ statusCode: UNAUTHENTICATED });
       reject({ statusCode: UNAUTHORIZED })
      //resolve(noUsers);
      // resolve(users);
    }, 8000);
  });
}
  export default UserMessage;
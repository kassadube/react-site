import React from 'react';
import { mapProps  }  from 'recompose';

import Header from '../../components/header';

const User = ({ name, status }) =>
  <div className="User">{ name }—{ status }</div>;

const UserList = ({ users, status }) =>
  <div className="UserList">
    <h3>{ status } users</h3>
    { users && users.map((user, i) => <User {...user}  key={i}/>) }
  </div>;

const users = [
  { name: "Tim", status: 'active' },
  { name: "Bob", status: 'active' },
  { name: "Joe", status: 'active' },
  { name: "Jim", status: 'inactive' },
];

const filterByStatus = (status) => mapProps(
  ({ users }) => ({
    status,
    users: users.filter(u => u.status === status)
  })
);

const ActiveUsers = filterByStatus('active')(UserList);
const InactiveUsers = filterByStatus('inactive')(UserList);
const PendingUsers = filterByStatus('pending')(UserList);

const WithPropsExample = () =>
  <div>
    <Header headerName="WithProps"/>
    <div className="App">
        <ActiveUsers users={ users } />
        <InactiveUsers users={ users } />
        <PendingUsers users={ users } />
    </div>
  </div>;

  export default WithPropsExample;
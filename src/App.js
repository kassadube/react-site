import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router/immutable';
import AppLayout from './components/Layout/AppLayout';

const App = ({ history }) => {
  localStorage.setItem('debug', 'react-site:*');
  return (
    <ConnectedRouter history={history}>
      <AppLayout />
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App

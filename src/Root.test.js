import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { render } from 'react-testing-library';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root />, div);
  ReactDOM.unmountComponentAtNode(div);
});


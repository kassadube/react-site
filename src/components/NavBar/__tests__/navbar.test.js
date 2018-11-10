
import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import NavBar from '../../NavBar';
import Home from '../../Home';

it('renders without crashing', () => {
  shallow(<NavBar />);
});

it('renders welcome message', () => {
    const testRenderer = renderer.create(
      <Home />
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });



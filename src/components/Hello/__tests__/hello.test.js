
import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'react-testing-library';
import Hello from '../Hello';

it('renders without crashing', () => {
  shallow(<Hello />);
});

it('renders welcome message', () => {
    const wrapper = shallow(<Hello />);
    const welcome = <div>Hello1</div>;
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper).toContainReact(welcome);
  });


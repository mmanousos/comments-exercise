import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../components/App';

it('has a header element', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('header').length).toEqual(1);
});

import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import Editor from './Editor';
import { expect } from 'chai';

describe('<Editor />', () => {
  it('should render view', () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<View />)).to.equal(true);
  });
});

import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TextBox from './TextBox';

describe('<TextBox />', () => {
  it('should render', () => {
    const wrapper = shallow(<TextBox />);
    expect(wrapper).to.exist;
  });

  it('should render label', () => {
    const schema = { label: 'Test ' };
    const wrapper = shallow(<TextBox schema={schema} />);
    expect(wrapper.find('Text').contains(schema.label)).to.be.true;
  });

  it('should render TextInput', () => {
    const wrapper = shallow(<TextBox />);
    expect(wrapper.find('TextInput')).to.exist;
  });
});

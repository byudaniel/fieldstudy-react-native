
import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Slider from './Slider';

describe('<Slider />', () => {
  it('should render', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper).to.exist;
  });

  it('should render label', () => {
    const schema = { label: 'Test ' };
    const wrapper = shallow(<Slider schema={schema} />);
    expect(wrapper.find('Text').contains(schema.label)).to.be.true;
  });

  it('should render Slider', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper.find('SliderNative')).to.exist;
  });
});

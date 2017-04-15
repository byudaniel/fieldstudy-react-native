
import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Question from './Question';

describe('<Question />', () => {
  it('should render', () => {
    const schema = { type: 'text' };
    const wrapper = shallow(<Question schema={schema} />);
    expect(wrapper).to.exist;
  });

  it('should render textbox for text question type', () => {
    const schema = { type: 'text' };
    const wrapper = shallow(<Question schema={schema} />);
    expect(wrapper.find('TextBox')).length(1);
  });

  it('should render slider for range question type', () => {
    const schema = { type: 'range' };
    const wrapper = shallow(<Question schema={schema} />);
    expect(wrapper.find('Slider')).length(1);
  });
});


import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Questions from './Questions';

describe('<Questions />', () => {
  it('should render', () => {
    const wrapper = shallow(<Questions />);
    expect(wrapper).to.exist;
  });

  it('should render questions', () => {
    const questions = [{ id: 1 }, { id: 2 }];
    const responses = { 1: {}, 2: {} };
    const wrapper = shallow(<Questions questions={questions} responses={responses} />);
    expect(wrapper.find('Question')).to.have.lengthOf(2);
  });
});

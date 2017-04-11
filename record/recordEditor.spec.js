
import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import RecordEditor from './RecordEditor';

describe('<RecordEditor />', () => {
  it('should render page header', () => {
    const wrapper = shallow(<RecordEditor />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('PageHeader')).to.have.length(1);
  });

  it('should render questions', () => {
    const wrapper = shallow(<RecordEditor />);
    expect(wrapper.find('Questions')).to.have.length(1);
  });
});


import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import RecordEditor from './RecordEditor';
import { PageHeader } from '../components';

describe('<Editor />', () => {
  it('should render page header', () => {
    const wrapper = shallow(<RecordEditor />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find(PageHeader).exists()).to.equal(true);
  });
});


import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
  it('should render page header', () => {
    const headerBody = 'Test Header';
    const wrapper = shallow(<PageHeader>{headerBody}</PageHeader>);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find(Text).contains(headerBody)).to.equal(true);
  });
});

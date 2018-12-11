import React from 'react';
import { shallow } from 'enzyme';
import BrowseBoard from './BrowseBoard.js';
import ArtModal from '../ArtModal/ArtModal.js'
import BrowseRow from '../BrowseRow/BrowseRow.js'

import { expect } from 'chai';


describe('<BrowseBoard />', () => {

  it('renders', () => {
    const sectionList = ['1','2','3']
    const wrapper = shallow(<BrowseBoard sectionList = {sectionList} />);
    expect(wrapper).to.exist
  });

  it('renders an `.ArtModal`', () => {
    const sectionList = ['1','2','3']
    const wrapper = shallow(<BrowseBoard sectionList = {sectionList} />);
    expect(wrapper.find(ArtModal)).to.have.lengthOf(1);
  });

  it('renders correct number of Rows', () => {
    const sectionList = ['1','2','3']
    const wrapper = shallow(<BrowseBoard sectionList = {sectionList} />);
    expect(wrapper.find(BrowseRow)).to.have.lengthOf(3);
  });

});

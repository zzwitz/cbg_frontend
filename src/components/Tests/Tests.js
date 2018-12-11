import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
// import BrowseBoard from '../BrowseBoard/BrowseBoard.js'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;

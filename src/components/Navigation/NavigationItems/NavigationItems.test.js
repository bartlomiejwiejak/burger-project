import { configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavigationItems />)
})
describe('<NavigationItems/>', () => {
  it('should render two <NavitationItem/> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  })
  it('should render three <NavitationItem/> elements if not authenticated', () => {
    wrapper.setProps({ isAuth: true })
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  })
  it('should render <NavitationItem link="/logout"/> element if authenticated', () => {
    wrapper.setProps({ isAuth: true })
    expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
  })
})
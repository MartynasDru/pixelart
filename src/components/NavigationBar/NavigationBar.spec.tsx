import React from 'react';
import * as Enzyme from 'enzyme';
import {NavigationBar} from './NavigationBar';

describe('Navigation', () => {
    const setup = () => Enzyme.mount(<NavigationBar />);

    it('renders without crashing', () => {
        setup();
    });

    it('should open burger navigation dropdown when open icon is clicked', () => {
       let wrapper = setup();
       expect(wrapper.find('.burger-navigation').length).toBe(0);

       wrapper.find('.navigation-bar__toggle-open').simulate('click');
       expect(wrapper.find('.burger-navigation').length).toBe(1);
    });
})
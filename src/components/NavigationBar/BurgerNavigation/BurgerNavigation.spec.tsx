import React from 'react';
import * as Enzyme from 'enzyme';
import {BurgerNavigation, IBurgerNavigationProps} from './BurgerNavigation';
import {NavigationTabs} from '../../../utils/mockData';

describe('BurgerNavigation', () => {
    const setup = (_props?: Partial<IBurgerNavigationProps>) => {
        const props: IBurgerNavigationProps = Object.assign({}, {
            activeTab: NavigationTabs.AboutUs,
            setActiveTab: jest.fn()
        }, _props);

        const wrapper = Enzyme.mount(<BurgerNavigation {...props} />);

        return {
            wrapper,
            props
        };
    };

    it('renders without crashing', () => {
        setup();
    });

    it('should generate as many burger navigation items as there is navigation tabs', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.burger-navigation__item').length).toBe(Object.keys(NavigationTabs).length)
    })
})
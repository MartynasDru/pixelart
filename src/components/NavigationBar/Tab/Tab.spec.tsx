import React from 'react';
import * as Enzyme from 'enzyme';
import {ITabProps, Tab} from './Tab';
import {NavigationTabs, NavigationTabsData} from '../../../utils/mockData';

describe('Tab', () => {
    const setup = (_props?: Partial<ITabProps>) => {
        const props: ITabProps = Object.assign({}, {
            onClick: jest.fn(),
            isActive: false,
            link: '/'

        }, _props);

        const wrapper = Enzyme.mount(<Tab {...props} />);

        return {
            wrapper,
            props
        };
    };

    it('renders without crashing', () => {
        setup();
    });

    it('should have active class if isActive property is passed true', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('.navigation-bar__tab.active').length).toBe(0);

        wrapper = setup({
            isActive: true
        }).wrapper;
        expect(wrapper.find('.navigation-bar__tab.active').length).toBe(1);
    });

    it('should execute onClick function which is passed through props when it`s clicked on tab', () => {
        let {wrapper, props} = setup();
        wrapper.find('.navigation-bar__tab-link').simulate('click');
        expect(props.onClick).toBeCalled();
    });

    it('tab should have expand icon if there is options/dropdown to show', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('.expand-icon').length).toBe(0);

        wrapper = setup({
            options: NavigationTabsData[NavigationTabs.Portfolio].options
        }).wrapper;
        expect(wrapper.find('.expand-icon').length).toBe(1);
    })
})
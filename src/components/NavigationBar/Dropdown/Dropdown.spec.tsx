import React from 'react';
import * as Enzyme from 'enzyme';
import {Dropdown, IDropdownProps} from './Dropdown';
import {NavigationTabs, NavigationTabsData} from '../../../utils/mockData';

describe('Dropdown', () => {
    const setup = (_props?: Partial<IDropdownProps>) => {
        const props: IDropdownProps = Object.assign({}, {
            options: [],
            onClick: jest.fn()
        }, _props);

        const wrapper = Enzyme.mount(<Dropdown {...props} />);

        return {
            wrapper,
            props
        };
    };

    it('renders without crashing', () => {
        setup();
    });

    it('should render as many navigation tab dropdown list rows as there is options passed', () => {
        let {wrapper, props} = setup({
            options: NavigationTabsData[NavigationTabs.Portfolio].options
        });
        expect(wrapper.find('.navigation-bar__tab-dropdown-row').length).toBe(props.options.length);
    });

    it('should execute onClick if dropdown row is clicked', () => {
        let {wrapper, props} = setup({
            options: [{
                title: 'title',
                link: 'link'
            }]
        });
        wrapper.find('.navigation-bar__tab-dropdown-row').simulate('click');
        expect(props.onClick).toBeCalled()
    });
})
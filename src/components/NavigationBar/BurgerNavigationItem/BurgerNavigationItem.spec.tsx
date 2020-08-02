import React from 'react';
import * as Enzyme from 'enzyme';
import {BurgerNavigationItem, IBurgerNavigationItemProps} from './BurgerNavigationItem';

describe('BurgerNavigationItem', () => {
    const setup = (_props?: Partial<IBurgerNavigationItemProps>) => {
        const props: IBurgerNavigationItemProps = Object.assign({}, {
            onClick: jest.fn(),
            isActive: false,
            tabInfo: {}
        }, _props);

        const wrapper = Enzyme.mount(<BurgerNavigationItem {...props} />);

        return {
            wrapper,
            props
        };
    };

    it('renders without crashing', () => {
        setup();
    });

    it('should display expand icon if there is options in tabInfo', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('.expand-icon').length).toBe(0);

        wrapper = setup({
            tabInfo: {
                title: 'title',
                link: 'link',
                options: [{
                    title: 'title',
                    link: 'link'
                }]
            }
        }).wrapper;
        expect(wrapper.find('.expand-icon').length).toBe(1);
    });

    it('should display burger navigation sub menu if there is options in tabInfo', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('.burger-navigation__sub-menu').length).toBe(0);

        wrapper = setup({
            tabInfo: {
                title: 'title',
                link: 'link',
                options: [{
                    title: 'title',
                    link: 'link'
                }]
            }
        }).wrapper;
        expect(wrapper.find('.burger-navigation__sub-menu').length).toBe(1);
    });

    it('should generate as many sub items as there is options passed', () => {
        const {wrapper} = setup({
            tabInfo: {
                title: 'title',
                link: 'link',
                options: [
                    {
                        title: 'title',
                        link: 'link'
                    },
                    {
                        title: 'title1',
                        link: 'link1'
                    }
                ]
            }
        });
        expect(wrapper.find('.burger-navigation__sub-item').length).toBe(2);
    });

    it('burger navigation item link should have class active if isActive property is passed as true', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('.burger-navigation__item-link.active').length).toBe(0);

        wrapper = setup({
            isActive: true
        }).wrapper;
        expect(wrapper.find('.burger-navigation__item-link.active').length).toBe(1);
    });

    it('should execute onClick when burger navigation item link is clicked', () => {
        let {wrapper, props} = setup();
        wrapper.find('.burger-navigation__item-link').simulate('click');
        expect(props.onClick).toBeCalled();
    });
})
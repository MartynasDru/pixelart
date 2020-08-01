import React from 'react';
import * as Enzyme from 'enzyme';
import {ITabsProps, Tabs} from './Tabs';
import {NavigationTabs, NavigationTabsInfo} from '../../../utils/utils';

describe('Tabs', () => {
    const setup = (_props?: Partial<ITabsProps>) => {
        const props: ITabsProps = Object.assign({}, {
            activeTab: NavigationTabs.AboutUs,
            setActiveTab: jest.fn()
        }, _props);

        const wrapper = Enzyme.mount(
            <Tabs {...props}/>
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        const wrapper = setup();
    });

    it('should render as many tabs as there is in NavigationTabsInfo', () => {
        const wrapper = setup();
        expect(wrapper.find('[data-qa="tab"]').length).toBe(Object.keys(NavigationTabsInfo).length)
    })
})
import React from 'react';
import * as Enzyme from 'enzyme';
import {Tabs} from './Tabs';
import {NavigationTabsInfo} from '../../../utils/utils';

describe('Tabs', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <Tabs />
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
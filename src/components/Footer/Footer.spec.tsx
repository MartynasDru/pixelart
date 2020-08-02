import React from 'react';
import * as Enzyme from 'enzyme';
import {Footer} from './Footer';
import {ContactsData, TopicsData} from '../../utils/mockData';

describe('Footer', () => {
    const setup = () => Enzyme.mount(<Footer />);

    it('renders without crashing', () => {
        setup();
    });

    it('should generate as many topics rows in list as there is in topics data', () => {
        const wrapper = setup();
        expect(wrapper.find('.footer__topics-list-row').length).toBe(TopicsData.length)
    });

    it('should generate as many contacts rows in list as there is in contacts data', () => {
        const wrapper = setup();
        expect(wrapper.find('.footer__contacts-list-row').length).toBe(ContactsData.length)
    });
})
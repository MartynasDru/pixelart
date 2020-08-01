import React from 'react';
import * as Enzyme from 'enzyme';
import {InfoCards} from './InfoCards';
import {InformationCardsData} from '../../utils/mockData';

describe('InfoCards', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <InfoCards />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        setup();
    });

    it('should generate as many info cards as there is in information cards data', () => {
        const wrapper = setup();
        expect(wrapper.find('.info-cards__card').length).toBe(Object.keys(InformationCardsData).length);
    })
})
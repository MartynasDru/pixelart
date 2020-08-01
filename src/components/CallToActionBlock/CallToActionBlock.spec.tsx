import React from 'react';
import * as Enzyme from 'enzyme';
import {CallToActionBlock} from './CallToActionBlock';

describe('CallToActionBlock', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <CallToActionBlock />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        setup();
    });
})
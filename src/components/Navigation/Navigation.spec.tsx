import React from 'react';
import * as Enzyme from 'enzyme';
import {Navigation} from './Navigation';

describe('Navigation', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <Navigation />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        const wrapper = setup();
    });
})
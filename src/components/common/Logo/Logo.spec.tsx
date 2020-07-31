import React from 'react';
import * as Enzyme from 'enzyme';
import {Logo} from './Logo';

describe('Logo', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <Logo />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        const wrapper = setup();
    });
})
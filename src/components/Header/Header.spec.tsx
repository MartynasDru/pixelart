import React from 'react';
import * as Enzyme from 'enzyme';
import {Header} from './Header';

describe('Header', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <Header />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        setup();
    });
})
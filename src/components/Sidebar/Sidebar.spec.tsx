import React from 'react';
import * as Enzyme from 'enzyme';
import {Sidebar} from './Sidebar';

describe('Sidebar', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <Sidebar />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        setup();
    });
})
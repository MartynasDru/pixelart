import React from 'react';
import * as Enzyme from 'enzyme';
import {Main} from './Main';

describe('Main', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <Main />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        setup();
    });
})
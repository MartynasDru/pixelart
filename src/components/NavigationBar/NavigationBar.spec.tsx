import React from 'react';
import * as Enzyme from 'enzyme';
import {NavigationBar} from './NavigationBar';

describe('Navigation', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <NavigationBar />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        const wrapper = setup();
    });
})
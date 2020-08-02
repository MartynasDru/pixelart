import React from 'react';
import * as Enzyme from 'enzyme';
import {Logo} from './Logo';

describe('Logo', () => {
    it('renders without crashing', () => {
        Enzyme.mount(<Logo />)
    });
})
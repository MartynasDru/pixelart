import React from 'react';
import * as Enzyme from 'enzyme';
import {Header} from './Header';

describe('Header', () => {
    it('renders without crashing', () => {
        Enzyme.mount(<Header />);
    });
})
import React from 'react';
import * as Enzyme from 'enzyme';
import {Sidebar} from './Sidebar';

describe('Sidebar', () => {
    it('renders without crashing', () => {
        Enzyme.mount(<Sidebar />)
    });
})
import React from 'react';
import * as Enzyme from 'enzyme';
import {Main} from './Main';

describe('Main', () => {
    it('renders without crashing', () => {
        Enzyme.mount(<Main />);
    });
})
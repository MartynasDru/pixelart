import React from 'react';
import * as Enzyme from 'enzyme';
import {CallToActionBlock} from './CallToActionBlock';

describe('CallToActionBlock', () => {
    it('renders without crashing', () => {
        Enzyme.mount(<CallToActionBlock />)
    });
})
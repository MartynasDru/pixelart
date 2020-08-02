import React from 'react';
import * as Enzyme from 'enzyme';
import {FooterColumn, IFooterColumnProps} from './FooterColumn';

describe('FooterColumn', () => {
    it('renders without crashing', () => {
        const props = {
            title: 'title',
            content: 'content'
        }
        Enzyme.mount(<FooterColumn {...props} />)
    });
});
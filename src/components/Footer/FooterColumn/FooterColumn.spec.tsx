import React from 'react';
import * as Enzyme from 'enzyme';
import {FooterColumn, IFooterColumnProps} from './FooterColumn';

describe('FooterColumn', () => {
    const setup = (_props?: Partial<IFooterColumnProps>) => {
        const props: IFooterColumnProps = Object.assign({}, {
            title: 'title',
            content: 'content'
        }, _props);

        const wrapper = Enzyme.mount(
            <FooterColumn {...props} />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        setup();
    });
})
import React from 'react';
import * as Enzyme from 'enzyme';
import {Card, ICardProps} from './Card';

describe('Card', () => {
    const setup = (_props?: Partial<ICardProps>) => {
        const props: ICardProps = Object.assign({}, {
            isHighlighted: false,
            title: 'title',
            description: 'description'
        }, _props);

        const wrapper = Enzyme.mount(
            <Card {...props} />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        setup();
    });

    it('info card should have class highlighted if isHighlighted property is passed as true', () => {
        let wrapper = setup();
        expect(wrapper.find('.info-cards__card.highlighted').length).toBe(0);

        wrapper = setup({
            isHighlighted: true
        });
        expect(wrapper.find('.info-cards__card.highlighted').length).toBe(1)
    })
})
import React from 'react';
import * as Enzyme from 'enzyme';
import {Button, IButtonProps} from './Button';

describe('Button', () => {
    const setup = (_props?: Partial<IButtonProps>) => {
        const props: IButtonProps = Object.assign({}, {
            onClick: jest.fn()
        }, _props);

        const wrapper = Enzyme.mount(<Button {...props} />);

        return {
            wrapper,
            props
        };
    };

    it('renders without crashing', () => {
        setup();
    });

    it('should execute onClick whet button is clicked', () => {
        const {wrapper, props} = setup();
        wrapper.find('.button').simulate('click');
        expect(props.onClick).toBeCalled();
    });
})
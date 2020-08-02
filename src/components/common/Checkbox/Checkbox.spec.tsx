import React from 'react';
import * as Enzyme from 'enzyme';
import {Checkbox, ICheckboxProps} from './Checkbox';

describe('Checkbox', () => {
    const setup = (_props?: Partial<ICheckboxProps>) => {
        const props: ICheckboxProps = Object.assign({}, {
            checked: false,
            onChange: jest.fn()
        }, _props);

        const wrapper = Enzyme.mount(<Checkbox {...props} />);

        return {
            wrapper,
            props
        };
    };

    it('renders without crashing', () => {
        setup();
    });

    it('should have checked class if checked property is passed true', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('.checkbox.checked').length).toBe(0);

        wrapper = setup({
            checked: true
        }).wrapper;
        expect(wrapper.find('.checkbox.checked').length).toBe(1);
    });

    it('should have label if labelText property is passed', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('.checkbox__label').length).toBe(0);

        wrapper = setup({
            labelText: 'Checkbox label'
        }).wrapper;
        expect(wrapper.find('.checkbox__label').length).toBe(1);
    });

    it('should execute onChange function which is passed through props when changes happen', () => {
        let {wrapper, props} = setup();
        wrapper.find('.checkbox__input').simulate('change');
        expect(props.onChange).toBeCalled();
    });
})
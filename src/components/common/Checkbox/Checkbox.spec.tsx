import React from 'react';
import * as Enzyme from 'enzyme';
import {Checkbox, ICheckboxProps} from './Checkbox';

describe('Checkbox', () => {
    const setup = (_props?: Partial<ICheckboxProps>) => {
        const props: ICheckboxProps = Object.assign({}, {
            checked: false,
            onChange: jest.fn()
        }, _props);

        const wrapper = Enzyme.mount(
            <Checkbox {...props} />
        );

        return {
            wrapper,
            props
        };
    };

    it('renders without crashing', () => {
        const {wrapper} = setup();
    });

    it('should have checked class if checked property is passed true', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('.checked').length).toBe(0);

        wrapper = setup({
            checked: true
        }).wrapper;
        expect(wrapper.find('.checked').length).toBe(1);
    })

    it('should have label if labelText property is passed', () => {
        let wrapper = setup().wrapper;
        expect(wrapper.find('[data-qa="checkbox-label"]').length).toBe(0);

        wrapper = setup({
            labelText: 'Checkbox label'
        }).wrapper;
        expect(wrapper.find('[data-qa="checkbox-label"]').length).toBe(1);
    })

    it('should have label if labelText property is passed', () => {
        let {wrapper, props} = setup();
        wrapper.find('[data-qa="checkbox-input"]').simulate('change');
        expect(props.onChange).toBeCalled();
    })
})
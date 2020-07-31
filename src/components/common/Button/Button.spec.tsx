import React from 'react';
import * as Enzyme from 'enzyme';
import {Button} from './Button';

describe('Button', () => {
    const setup = () => {

        const wrapper = Enzyme.mount(
            <Button />
        );

        return wrapper;
    };

    it('renders without crashing', () => {
        const wrapper = setup();
    });
})
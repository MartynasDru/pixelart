import React from 'react';
import * as Enzyme from 'enzyme';
import ReactDOM from 'react-dom';
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
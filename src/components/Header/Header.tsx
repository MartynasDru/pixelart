import * as React from 'react';

import './Header.scss';
import {Button} from '../common/Button/Button';
import {Tabs} from "./Tabs/Tabs";

export const Header: React.FunctionComponent = () => (
    <div className='header'>
        <div className='header__app-name'>Pixelart</div>
        <div className='header__navigation'>
            <Button
                className='header__action-button'
            >
                Get in touch
            </Button>
            <Tabs />
        </div>
    </div>
);
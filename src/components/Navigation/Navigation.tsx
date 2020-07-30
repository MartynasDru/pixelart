import * as React from 'react';

import './Navigation.scss';
import {Button} from '../common/Button/Button';
import {Tabs} from './Tabs/Tabs';
import {Logo} from '../common/Logo/Logo';

export const Navigation: React.FunctionComponent = () => (
    <div className='navigation'>
        <div className='navigation__left'><Logo /></div>
        <div className='navigation__right'>
            <Button
                className='navigation__action-button'
            >
                Get in touch
            </Button>
            <Tabs />
        </div>
    </div>
);
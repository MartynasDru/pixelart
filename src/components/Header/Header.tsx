import * as React from 'react';
import './Header.scss';
import {Button} from '../common/Button/Button';

export const Header: React.FunctionComponent = () => (
    <header className='header'>
        <div className='header__text-container'>
            <h1 className='header__title'>PixelArt Agency</h1>
            <p className='header__description'>We are creative design and development professionals</p>
        </div>
        <div className='header__buttons'>
            <Button className='header__button--white'>
                Let`s talk!
            </Button>
            <Button className='header__button--outlined'>
                About us
            </Button>
        </div>
    </header>
);
import * as React from 'react';
import './Logo.scss';
import {joinTruthy} from '../../../utils/utils';

interface ILogoProps {
    className?: string;
}

export const Logo: React.FunctionComponent<ILogoProps> = props => (
    <a
        href='/home'
        className={joinTruthy([
            'logo',
            props.className
        ])}
    >
        <b>Pixel</b><span>art</span>
    </a>
);
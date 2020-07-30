import * as React from 'react';
import './Logo.scss';
import {joinTruthy} from "../../../utils/utils";

interface ILogoProps {
    className?: string;
}

export const Logo: React.FunctionComponent<ILogoProps> = props => (
    <a
        href='#'
        className={joinTruthy([
            'logo',
            props.className
        ])}
    >
        <strong>Pixel</strong><span>art</span>
    </a>
);
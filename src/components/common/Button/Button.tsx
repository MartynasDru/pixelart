import * as React from 'react';
import './Button.scss';
import {joinTruthy} from '../../../utils/utils';
import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    className?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = props => (
    <button
        onClick={props.onClick}
        className={joinTruthy([
        'button',
        props.className
    ])}
    >
        {props.children}
    </button>
);
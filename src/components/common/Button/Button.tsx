import * as React from 'react';
import './Button.scss';
import {ButtonTypes, joinTruthy} from '../../../utils/utils';
import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    className?: string
    buttonType?: ButtonTypes
}

export const Button: React.FunctionComponent<IButtonProps> = props => (
    <button
        onClick={props.onClick}
        className={joinTruthy([
        'button',
        props.className,
        props.buttonType === ButtonTypes.Outlined && 'button--outlined',
        props.buttonType === ButtonTypes.White && 'button--white'
    ])}
    >
        {props.children}
    </button>
);
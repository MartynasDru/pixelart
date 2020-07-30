import * as React from 'react';
import './Button.scss';
import {ButtonTypes, joinTruthy} from "../../../utils/utils";

interface IButtonProps {
    className?: string
    buttonType?: ButtonTypes
}

export const Button: React.FunctionComponent<IButtonProps> = props => (
    <button className={joinTruthy([
        'button',
        props.className,
        props.buttonType === ButtonTypes.Outlined && 'button--outlined',
        props.buttonType === ButtonTypes.White && 'button--white'
    ])}>
        {props.children}
    </button>
);
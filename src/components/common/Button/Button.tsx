import * as React from 'react';
import './Button.scss';
import {joinTruthy} from "../../../utils/utils";

interface IButtonProps {
    className?: string
}

export const Button: React.FunctionComponent<IButtonProps> = props => (
    <button className={joinTruthy([
        'button',
        props.className
    ])}>
        {props.children}
    </button>
);
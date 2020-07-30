import * as React from 'react';
import './Checkbox.scss';
import {joinTruthy} from '../../../utils/utils';

interface ICheckboxProps {
    checked: boolean;
    onChange: () => void;
    labelText?: string;
}

export const Checkbox: React.FunctionComponent<ICheckboxProps> = props => (
    <div className='checkbox'>
        <label
            className={joinTruthy([
                'checkbox__with-border',
                props.checked && 'checked'
            ])}
        >
            <input
                type='checkbox'
                checked={props.checked}
                name='remember'
                value='Remember me'
                onChange={props.onChange}
            />
        </label>
        {
            props.labelText &&
            <label
                className='checkbox__label'
            >
                {props.labelText}
            </label>
        }
    </div>
);
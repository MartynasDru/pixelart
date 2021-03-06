import * as React from 'react';
import './Checkbox.scss';
import {joinTruthy} from '../../../utils/utils';

export interface ICheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelText?: string;
}

export const Checkbox: React.FunctionComponent<ICheckboxProps> = props => (
    <div className='checkbox-wrapper'>
        <label
            className={joinTruthy([
                'checkbox',
                props.checked && 'checked'
            ])}
        >
            <input
                className='checkbox__input'
                type='checkbox'
                checked={props.checked}
                name='checkbox'
                onChange={e => props.onChange(e)}
            />
        </label>
        {
            props.labelText &&
            <label className='checkbox__label'>
                {props.labelText}
            </label>
        }
    </div>
);
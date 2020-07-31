import * as React from 'react';
import './Checkbox.scss';
import {joinTruthy} from '../../../utils/utils';

export interface ICheckboxProps {
    checked: boolean;
    onChange: () => void;
    labelText?: string;
}

export const Checkbox: React.FunctionComponent<ICheckboxProps> = props => (
    <div className='checkbox'>
        <label
            data-qa='checkbox'
            className={joinTruthy([
                'checkbox__with-border',
                props.checked && 'checked'
            ])}
        >
            <input
                data-qa='checkbox-input'
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
                data-qa='checkbox-label'
                className='checkbox__label'
            >
                {props.labelText}
            </label>
        }
    </div>
);
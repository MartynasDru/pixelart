import * as React from 'react';
import '../../Navigation.scss';
import {IHeaderNavigationTabOption} from '../../../../utils/utils';

export interface IDropdownProps {
    options: Array<IHeaderNavigationTabOption>;
}

export const Dropdown: React.FunctionComponent<IDropdownProps> = props => (
    <ul
        data-qa='dropdown'
        className='dropdown'
    >
        {
            props.options.map((option, index) => (
                <li
                    key={index}
                    data-qa='dropdown-row'
                    className='dropdown__row'
                >
                    <a
                        href={option.link}
                    >
                        {option.title}
                    </a>
                </li>
            ))
        }
    </ul>
)
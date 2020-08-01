import * as React from 'react';
import '../NavigationBar.scss';
import {IHeaderNavigationTabOption} from '../../../utils/contracts';

export interface IDropdownProps {
    options: Array<IHeaderNavigationTabOption>;
}

export const Dropdown: React.FunctionComponent<IDropdownProps> = props => (
    <ul
        data-qa='dropdown'
        className='navigation-bar__tab-dropdown'
    >
        {
            props.options.map((option, index) => (
                <li
                    key={index}
                    data-qa='dropdown-row'
                    className='navigation-bar__tab-dropdown-row'
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
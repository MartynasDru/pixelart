import * as React from 'react';
import '../NavigationBar.scss';
import {IHeaderNavigationTabOption} from '../../../utils/contracts';

export interface IDropdownProps {
    options: Array<IHeaderNavigationTabOption>;
    onClick: () => void;
}

export const Dropdown: React.FunctionComponent<IDropdownProps> = props => (
    <ul
        className='navigation-bar__tab-dropdown'
    >
        {
            props.options.map((option, index) => (
                <li
                    key={index}
                    className='navigation-bar__tab-dropdown-row'
                    onClick={props.onClick}
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
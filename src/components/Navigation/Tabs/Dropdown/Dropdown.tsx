import * as React from 'react';
import '../../Navigation.scss';
import {IHeaderNavigationTabOption} from '../../../../utils/utils';

interface IDropdownProps {
    options: Array<IHeaderNavigationTabOption>;
}

export const Dropdown: React.FunctionComponent<IDropdownProps> = props => (
    <ul
        className='dropdown'
    >
        {
            props.options.map((option, index) => (
                <li
                    key={index}
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
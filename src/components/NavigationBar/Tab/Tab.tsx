import * as React from 'react';
import {joinTruthy} from '../../../utils/utils';
import '../NavigationBar.scss';
import {Dropdown} from '../Dropdown/Dropdown';
import {useState} from 'react';
import {IHeaderNavigationTabOption} from '../../../utils/contracts';

export interface ITabProps {
    options?: Array<IHeaderNavigationTabOption>;
    onClick: () => void;
    isActive: boolean;
    link: string;
}

export const Tab: React.FunctionComponent<ITabProps> = props => {
    const [isTabHovered, setIsTabHovered] = useState<boolean>(false);
    return (
        <li
            className={joinTruthy([
                'navigation-bar__tab',
                props.isActive && 'active'
            ])}
            onMouseEnter={() => setIsTabHovered(true)}
            onMouseLeave={() => setIsTabHovered(false)}
        >
            <a
                href={props.link}
                onClick={props.onClick}
                className={joinTruthy([
                    'navigation-bar__tab-link',
                    props.options && 'with-dropdown'
                ])}
            >
                {props.children}
            </a>
            {
                (props.options && isTabHovered ) &&
                <Dropdown
                    options={props.options}
                    onClick={props.onClick}
                />
            }
        </li>
    );
}
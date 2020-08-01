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
            data-qa='tab'
            className={joinTruthy([
                'navigation-bar__tab',
                props.isActive && 'active'
            ])}
            onMouseEnter={() => setIsTabHovered(true)}
            onMouseLeave={() => setIsTabHovered(false)}
        >
            <a
                data-qa='tab-link'
                href={props.link}
                onClick={props.onClick}
            >
                {props.children}
                {
                    props.options &&
                    <span
                        data-qa='expand-icon'
                        className='expand-icon'
                    />
                }
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
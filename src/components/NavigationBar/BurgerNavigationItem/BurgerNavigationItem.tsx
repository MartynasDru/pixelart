import * as React from 'react';
import {joinTruthy} from '../../../utils/utils';
import '../NavigationBar.scss';
import {IHeaderNavigationTab} from '../../../utils/contracts';

export interface IBurgerNavigationItemProps {
    onClick: () => void;
    isActive: boolean;
    tabInfo: IHeaderNavigationTab;
}

export const BurgerNavigationItem: React.FunctionComponent<IBurgerNavigationItemProps> = props => (
    <li
        className='burger-navigation__item'>
        <a
            href={props.tabInfo.link}
            className={joinTruthy([
                'burger-navigation__item-link',
                props.isActive && 'active'
            ])}
            onClick={() => props.onClick()}
        >
            {props.tabInfo.title}
            {
                props.tabInfo.options &&
                <span
                    className='expand-icon'
                />
            }
        </a>
        {
            props.tabInfo.options &&
            <ul
                className='burger-navigation__sub-menu'
            >
                {props.tabInfo.options.map((option, i) => (
                    <li
                        key={i}
                        className='burger-navigation__sub-item'
                    >
                        <a href={option.link}>{option.title}</a>
                    </li>
                ))}
            </ul>
        }
    </li>
);
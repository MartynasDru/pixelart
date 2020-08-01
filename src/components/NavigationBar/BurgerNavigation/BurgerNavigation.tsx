import * as React from 'react';
import {joinTruthy, NavigationTabsInfo} from '../../../utils/utils';
import '../NavigationBar.scss';

interface IBurgerNavigationProps {
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}

export const BurgerNavigation: React.FunctionComponent<IBurgerNavigationProps> = props => (
    <ul className='burger-navigation'>
        {Object.entries(NavigationTabsInfo).map((tab, index) => (
            <li
                key={index}
                className='burger-navigation__item'>
                <a
                    href={tab[1].link}
                    className={joinTruthy([
                        'burger-navigation__item-text',
                        props.activeTab === tab[0] && 'active'
                    ])}
                    onClick={() => props.setActiveTab(tab[0])}
                >
                    {tab[1].title}
                    {
                        tab[1].options &&
                        <span
                            data-qa='expand-icon'
                            className={joinTruthy([
                                'expand-icon',
                                props.activeTab === tab[0] && 'active'
                            ])}
                        />
                    }
                </a>
                {
                    tab[1].options &&
                    <ul
                        className='burger-navigation__sub-menu'
                    >
                        {tab[1].options.map((option, i) => (
                            <li
                                key={i}
                                className='burger-navigation__sub-item-text'
                            >
                                <a href={option.link}>{option.title}</a>
                            </li>
                        ))}
                    </ul>
                }
            </li>
        ))}
    </ul>
);
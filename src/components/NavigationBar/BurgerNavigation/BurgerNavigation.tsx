import * as React from 'react';
import {NavigationTabsData} from '../../../utils/mockData';
import '../NavigationBar.scss';
import {BurgerNavigationItem} from '../BurgerNavigationItem/BurgerNavigationItem';

export interface IBurgerNavigationProps {
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}

export const BurgerNavigation: React.FunctionComponent<IBurgerNavigationProps> = props => (
    <ul
        className='burger-navigation'
    >
        {Object.entries(NavigationTabsData).map(tabData => (
            <BurgerNavigationItem
                key={tabData[0]}
                onClick={() => props.setActiveTab(tabData[0])}
                isActive={props.activeTab === tabData[0]}
                tabInfo={tabData[1]}
            />
        ))}
    </ul>
);
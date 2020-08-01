import * as React from 'react';
import {NavigationTabsInfo} from '../../../utils/utils';
import '../NavigationBar.scss';
import {BurgerNavigationItem} from '../BurgerNavigationItem/BurgerNavigationItem';

interface IBurgerNavigationProps {
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}

export const BurgerNavigation: React.FunctionComponent<IBurgerNavigationProps> = props => (
    <ul className='burger-navigation'>
        {Object.entries(NavigationTabsInfo).map((tab, index) => (
            <BurgerNavigationItem
                onClick={() => props.setActiveTab(tab[0])}
                isActive={props.activeTab === tab[0]}
                tabInfo={tab[1]}
            />
        ))}
    </ul>
);
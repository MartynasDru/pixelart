import * as React from 'react';
import {Tab} from '../Tab/Tab';
import {NavigationTabsInfo} from '../../../utils/mockData';
import '../NavigationBar.scss';

export interface ITabsProps {
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}

export const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
    return (
        <nav className='navigation-bar__navigation'>
            <ul className='navigation-bar__tabs'>
                {Object.entries(NavigationTabsInfo).map((tab, index) => (
                    <Tab
                        key={index}
                        options={tab[1].options}
                        link={tab[1].link}
                        onClick={() => props.setActiveTab(tab[0])}
                        isActive={props.activeTab === tab[0]}
                    >
                        {tab[1].title}
                    </Tab>
                ))}
            </ul>
        </nav>
    );
};
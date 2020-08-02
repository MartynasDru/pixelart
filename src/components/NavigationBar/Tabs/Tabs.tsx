import * as React from 'react';
import {Tab} from '../Tab/Tab';
import {NavigationTabsData} from '../../../utils/mockData';
import '../NavigationBar.scss';

export interface ITabsProps {
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}

export const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
    return (
        <nav className='navigation-bar__navigation'>
            <ul className='navigation-bar__tabs'>
                {Object.entries(NavigationTabsData).map(tabData => (
                    <Tab
                        key={tabData[0]}
                        options={tabData[1].options}
                        link={tabData[1].link}
                        onClick={() => props.setActiveTab(tabData[0])}
                        isActive={props.activeTab === tabData[0]}
                    >
                        {tabData[1].title}
                    </Tab>
                ))}
            </ul>
        </nav>
    );
};
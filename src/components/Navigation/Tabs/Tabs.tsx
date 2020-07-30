import * as React from 'react';
import {Tab} from './Tab/Tab';
import {NavigationTabs, NavigationTabsInfo} from '../../../utils/utils';
import {useState} from 'react';
import '../Navigation.scss';

export const Tabs: React.FunctionComponent = () => {
    const [activeTab, setActiveTab] = useState<string>(NavigationTabs.AboutUs)
    return (
        <nav className='navigation__tabs'>
            <ul className='navigation__list'>
                {Object.entries(NavigationTabsInfo).map((tab, index) => (
                    <Tab
                        key={index}
                        options={tab[1].options}
                        link={tab[1].link}
                        onClick={() => setActiveTab(tab[0])}
                        isActive={activeTab === tab[0]}
                    >
                        {tab[1].title}
                    </Tab>
                ))}
            </ul>
        </nav>
    );
};
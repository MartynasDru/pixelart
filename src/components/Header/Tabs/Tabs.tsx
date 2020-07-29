import * as React from 'react';
import {Tab} from './Tab/Tab';
import './Tabs.scss';
import {HeaderNavigationTabs} from "../../../utils/utils";

export const Tabs: React.FunctionComponent = () => (
    <div className='header__tabs'>
        {Object.values(HeaderNavigationTabs).map((tab, index) => (
            <Tab
                key={index}
                options={tab.options}
            >
                {tab.title}
            </Tab>
        ))}
    </div>
);
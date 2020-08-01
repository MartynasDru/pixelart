import * as React from 'react';

import './NavigationBar.scss';
import {Button} from '../common/Button/Button';
import {Tabs} from './Tabs/Tabs';
import {Logo} from '../common/Logo/Logo';
import {BurgerNavigation} from './BurgerNavigation/BurgerNavigation';
import {useState} from 'react';
import {NavigationTabs} from '../../utils/mockData';

export const NavigationBar: React.FunctionComponent = () => {
    const [activeTab, setActiveTab] = useState<string>(NavigationTabs.AboutUs);
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    return (
        <div className='navigation-bar'>
            <div className='navigation-bar__left'><Logo /></div>
            <div className='navigation-bar__right'>
                <Button
                    className='navigation-bar__action-button'
                >
                    Get in touch
                </Button>
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                {
                    openDropdown &&
                    <BurgerNavigation
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                }
                <div className='navigation-bar__toggle-open' onClick={() => setOpenDropdown(!openDropdown)}>&#9776;</div>
            </div>
        </div>
    )
};
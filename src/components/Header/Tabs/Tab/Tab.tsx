import * as React from 'react';
import './Tab.scss';
import {IHeaderNavigationTabOption} from '../../../../utils/utils';

interface ITab {
    options?: Array<IHeaderNavigationTabOption>
}

export const Tab: React.FunctionComponent<ITab> = props => (
    <div className='header__tab'>
        <span className='header__tab__title'>
            {props.children}
        </span>
        {
            props.options &&
            <span className='header__tab__expand-icon'/>
        }
    </div>
);
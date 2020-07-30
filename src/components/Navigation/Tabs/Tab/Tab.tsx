import * as React from 'react';
import {IHeaderNavigationTabOption, joinTruthy} from '../../../../utils/utils';

interface ITabProps {
    options?: Array<IHeaderNavigationTabOption>
    onClick: () => void;
    isActive: boolean;
}

export const Tab: React.FunctionComponent<ITabProps> = props => (
    <li
        className={joinTruthy([
            'navigation__tab',
            props.isActive && 'active'
        ])}
        onClick={props.onClick}
    >
        <a
            href="#"
            className="navigation__link"
        >
            {props.children}
        </a>
        {
            props.options &&
            <span className='expand-icon'/>
        }
    </li>
);
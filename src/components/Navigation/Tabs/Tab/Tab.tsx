import * as React from 'react';
import {IHeaderNavigationTabOption, joinTruthy} from '../../../../utils/utils';
import '../../Navigation.scss';
import {Dropdown} from '../Dropdown/Dropdown';
import {useState} from 'react';

interface ITabProps {
    options?: Array<IHeaderNavigationTabOption>;
    onClick: () => void;
    isActive: boolean;
    link: string;
}

export const Tab: React.FunctionComponent<ITabProps> = props => {
    const [isTabHovered, setIsTabHovered] = useState<boolean>(false);
    return (
        <>
            <li
                className={joinTruthy([
                    'navigation__tab',
                    props.isActive && 'active'
                ])}
                onClick={props.onClick}
                onMouseEnter={() => setIsTabHovered(true)}
                onMouseLeave={() => setIsTabHovered(false)}
            >
                <a
                    href={props.link}
                >
                    {props.children}
                </a>
                {
                    props.options &&
                    <span className='expand-icon'/>
                }
                {
                    (props.options && isTabHovered ) &&
                    <Dropdown
                        options={props.options}
                    />
                }
            </li>
        </>
    );
}
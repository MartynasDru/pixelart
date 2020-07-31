import * as React from 'react';
import '../Footer.scss';
import {ReactElement} from 'react';

interface IFooterColumnProps {
    title: string | ReactElement;
    content: string | ReactElement;
}

export const FooterColumn: React.FunctionComponent<IFooterColumnProps> = props => (
    <div className='footer__column'>
        <div className='footer__column-title'>
            {props.title}
        </div>
        <div className='footer__column-content'>
            {props.content}
        </div>
    </div>
);
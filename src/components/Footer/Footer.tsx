import * as React from 'react';
import './Footer.scss';
import {Logo} from '../common/Logo/Logo';
import {FooterColumn} from './FooterColumn/FooterColumn';
import {joinTruthy} from '../../utils/utils';

export const Footer: React.FunctionComponent = () => (
    <div className='footer'>
        <div className='footer__main'>
            <FooterColumn
                title={
                    <Logo
                        className='footer__logo'
                    />
                }
                content={
                    <p className='footer__slogan'>A user interface is like a joke. If you have to explain it, it’s not that good</p>
                }
            />
            <FooterColumn
                title='Topics'
                content={
                    <ul className={joinTruthy([
                        'footer__list',
                        'footer__topics'
                    ])}>
                        <li>
                            First impressions in web design
                        </li>
                        <li>
                            Advanced SEO solutions
                        </li>
                        <li>
                            UX design 101
                        </li>
                        <li>
                            What’s the secret behind minimal designs
                        </li>
                    </ul>
                }
            />
            <FooterColumn
                title='Contacts'
                content={
                    <ul className={joinTruthy([
                        'footer__list',
                        'footer__contacts'
                    ])}>
                        <li>
                            <label>Street:</label> 4411 Bicetown Road
                        </li>
                        <li>
                            <label>City:</label> New York
                        </li>
                        <li>
                            <label>State:</label> NY
                        </li>
                        <li>
                            <label>Zip:</label> 10222
                        </li>
                        <li>
                            <label>Phone:</label> 917-369-8748
                        </li>
                        <li>
                            <label>Email:</label> hello@pixelart.com
                        </li>
                    </ul>}
            />
        </div>
        <span className='footer__separator'/>
        <div className='footer__copyright'>
            Copyright © 2020
        </div>
    </div>
);
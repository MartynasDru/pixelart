import * as React from 'react';
import './Footer.scss';
import {Logo} from '../common/Logo/Logo';
import {FooterColumn} from './FooterColumn/FooterColumn';
import {joinTruthy} from '../../utils/utils';
import {ContactsData, TopicsData} from '../../utils/mockData';

export const Footer: React.FunctionComponent = () => (
    <div className='footer'>
        <div className='footer__main'>
            <FooterColumn
                title={
                    <Logo className='footer__logo'/>
                }
                content={
                    <p className='footer__slogan'>A user interface is like a joke. If you have to explain it, it’s not that good</p>
                }
            />
            <FooterColumn
                title='Topics'
                content={
                    <ul className='footer__list'>
                        {
                            TopicsData.map((topicData, index) => (
                                <li
                                    key={index}
                                    className='footer__topics-list-row'
                                >
                                    <a href={topicData.link}>· {topicData.title}</a>
                                </li>
                            ))
                        }
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
                        {
                            ContactsData.map((contactData, index) => (
                                <li
                                    key={index}
                                    className='footer__contacts-list-row'
                                >
                                    <label>{contactData.label}:</label> {contactData.info}
                                </li>
                            ))
                        }
                    </ul>}
            />
        </div>
        <div className='footer__copyright'>
            Copyright © 2020
        </div>
    </div>
);
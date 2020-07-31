import * as React from 'react';
import './CallToActionBlock.scss';
import {Button} from '../common/Button/Button';

export const CallToActionBlock: React.FunctionComponent = () => (
    <div className='call-to-action-block'>
        <h3 className='call-to-action-block__title'>Tailored design for <em>Your business</em> to make it unique and attractive!</h3>
        <Button className='call-to-action-block__button'>Get in touch!</Button>
    </div>
);
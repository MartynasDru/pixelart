import * as React from 'react';
import {joinTruthy} from '../../../utils/utils';
import {IInformationCard} from '../../../utils/contracts';

export interface ICardProps extends IInformationCard {
    isHighlighted?: boolean;
}

export const Card: React.FunctionComponent<ICardProps> = props => (
    <div className={joinTruthy([
        'info-cards__card',
        props.isHighlighted && 'highlighted'
    ])}>
        <h3 className='info-cards__title'>{props.title}</h3>
        <div className='info-cards__description'>{props.description}</div>
    </div>
);
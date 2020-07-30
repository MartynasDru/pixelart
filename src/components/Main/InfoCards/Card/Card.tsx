import * as React from 'react';
import './Card.scss';
import {IInfoCard, joinTruthy} from "../../../../utils/utils";

interface ICardProps extends IInfoCard {
    isHighlighted: boolean;
}

export const Card: React.FunctionComponent<ICardProps> = props => (
    <div className={joinTruthy([
        'card',
        props.isHighlighted && 'highlighted'
    ])}>
        <h3 className='card__title'>{props.title}</h3>
        <span className='card__separator' />
        <div className='card__description'>{props.description}</div>
    </div>
);
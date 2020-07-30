import * as React from 'react';
import './InfoCards.scss';
import {CardsInformation} from '../../utils/utils';
import {Card} from './Card/Card';


export const InfoCards: React.FunctionComponent = () => (
    <div className='info-cards'>
        {CardsInformation.map(cardInfo => (
            <Card
                key={cardInfo.id}
                title={cardInfo.title}
                description={cardInfo.description}
                isHighlighted={cardInfo.id === 2}
            >
                {cardInfo.title}
            </Card>
        ))}
    </div>
);
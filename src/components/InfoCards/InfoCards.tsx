import * as React from 'react';
import './InfoCards.scss';
import {CardsInformation} from '../../utils/mockData';
import {Card} from './Card/Card';


export const InfoCards: React.FunctionComponent = () => (
    <div className='info-cards'>
        {CardsInformation.map((cardInfo, index) => (
            <Card
                key={index}
                title={cardInfo.title}
                description={cardInfo.description}
                isHighlighted={cardInfo.id === 2}
            >
                {cardInfo.title}
            </Card>
        ))}
    </div>
);
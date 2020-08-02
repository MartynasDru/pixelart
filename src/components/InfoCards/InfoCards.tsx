import * as React from 'react';
import './InfoCards.scss';
import {InformationCardsData} from '../../utils/mockData';
import {Card} from './Card/Card';

export const InfoCards: React.FunctionComponent = () => (
    <div className='info-cards'>
        {Object.entries(InformationCardsData).map((cardData, index) => (
            <Card
                key={index}
                title={cardData[1].title}
                description={cardData[1].description}
                isHighlighted={cardData[1].isHighlighted}
            >
                {cardData[1].title}
            </Card>
        ))}
    </div>
);
import React from 'react';
import type { TarotCard } from '../data/tarotData';
import { ShareButton } from './ShareButton';

interface ResultViewProps {
    card: TarotCard;
}

export const ResultView: React.FC<ResultViewProps> = ({ card }) => {
    return (
        <div style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            maxWidth: '600px',
            textAlign: 'left',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(201, 165, 92, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h2 style={{ color: '#c9a55c', borderBottom: '1px solid #c9a55c', paddingBottom: '10px', width: '100%', textAlign: 'center' }}>
                {card.nameJa} ({card.name})
            </h2>
            <div style={{ margin: '15px 0', width: '100%' }}>
                <strong style={{ color: '#ddd' }}>キーワード:</strong> <span style={{ color: '#fff' }}>{card.meaningUp}</span>
            </div>
            <p style={{ lineHeight: '1.6', color: '#eee', width: '100%' }}>
                {card.description}
            </p>
            <ShareButton card={card} />
        </div>
    );
};

import React from 'react';
import type { TarotCard as TarotCardType } from '../data/tarotData';
import './TarotCard.css';

interface TarotCardProps {
    card: TarotCardType | null;
    isRevealed: boolean;
}

export const TarotCard: React.FC<TarotCardProps> = ({ card, isRevealed }) => {
    return (
        <div className={`tarot-card-container ${isRevealed ? 'revealed' : ''}`}>
            <div className="tarot-card-inner">
                <div className="tarot-card-front">
                    {/* Back of the card design */}
                    <div className="card-pattern"></div>
                </div>
                <div className="tarot-card-back">
                    {card && (
                        <>
                            <img src={card.image} alt={card.name} className="card-image" />
                            <div className="card-name">{card.nameJa}</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

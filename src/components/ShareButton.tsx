import React from 'react';
import type { TarotCard } from '../data/tarotData';

interface ShareButtonProps {
    card: TarotCard;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ card }) => {
    const handleShare = () => {
        const text = `今日の運勢: ${card.nameJa} (${card.name})\n\n${card.meaningUp}\n\n#MysticTarot #タロット占い #今日の運勢`;
        // We link to the app with the result query param. 
        // Note: For the OGP image to be correct, we ideally point to a specific page or rely on Vercel OG middleware.
        // For now, we point to the app. 
        // *Optimisation*: Point to the api/og image? No, that's just an image.
        // We will point to the deployed app URL with a query param.
        const url = `${window.location.origin}/?result=${card.id}`;

        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

        window.open(twitterUrl, '_blank', 'width=550,height=420');
    };

    return (
        <button
            onClick={handleShare}
            style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: '#000',
                color: '#fff',
                border: '1px solid #333',
                borderRadius: '25px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(45deg, #000 0%, #222 100%)'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#1da1f2'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = '#333'}
        >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Xで結果をシェア
        </button>
    );
};

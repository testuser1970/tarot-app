import React from 'react';

interface LimitMessageProps {
    remaining: number;
}

export const LimitMessage: React.FC<LimitMessageProps> = ({ remaining }) => {
    return (
        <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(0,0,0,0.6)',
            padding: '10px 20px',
            borderRadius: '20px',
            border: '1px solid #c9a55c',
            color: '#c9a55c',
            fontSize: '0.9rem'
        }}>
            本日の残り回数: {remaining}回
        </div>
    );
};

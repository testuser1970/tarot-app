import React from 'react';

interface DrawButtonProps {
    onClick: () => void;
    disabled: boolean;
}

export const DrawButton: React.FC<DrawButtonProps> = ({ onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                padding: '15px 40px',
                fontSize: '1.2rem',
                backgroundColor: disabled ? '#555' : '#c9a55c',
                color: disabled ? '#888' : '#1a1a2e',
                border: 'none',
                borderRadius: '30px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                marginTop: '30px',
                transition: 'all 0.3s ease',
                boxShadow: disabled ? 'none' : '0 0 15px rgba(201, 165, 92, 0.5)',
                fontWeight: 'bold',
                letterSpacing: '2px'
            }}
        >
            {disabled ? '本日の分は終了' : 'カードを引く'}
        </button>
    );
};

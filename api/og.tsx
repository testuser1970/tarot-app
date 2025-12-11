import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'edge',
};

// Simplified data for the edge function to avoid import complexity
const cards = [
    { id: 0, name: "The Fool", nameJa: "愚者", color: "#E0E0E0" },
    { id: 1, name: "The Magician", nameJa: "魔術師", color: "#F4A460" },
    { id: 2, name: "The High Priestess", nameJa: "女教皇", color: "#87CEEB" },
    { id: 3, name: "The Empress", nameJa: "女帝", color: "#FF69B4" },
    { id: 4, name: "The Emperor", nameJa: "皇帝", color: "#DC143C" },
    { id: 5, name: "The Hierophant", nameJa: "法王", color: "#98FB98" },
    { id: 6, name: "The Lovers", nameJa: "恋人", color: "#FFC0CB" },
    { id: 7, name: "The Chariot", nameJa: "戦車", color: "#D2691E" },
    { id: 8, name: "Strength", nameJa: "力", color: "#FFA500" },
    { id: 9, name: "The Hermit", nameJa: "隠者", color: "#778899" },
    { id: 10, name: "Wheel of Fortune", nameJa: "運命の輪", color: "#4169E1" },
    { id: 11, name: "Justice", nameJa: "正義", color: "#4682B4" },
    { id: 12, name: "The Hanged Man", nameJa: "吊るされた男", color: "#483D8B" },
    { id: 13, name: "Death", nameJa: "死神", color: "#000000" },
    { id: 14, name: "Temperance", nameJa: "節制", color: "#ADD8E6" },
    { id: 15, name: "The Devil", nameJa: "悪魔", color: "#8B0000" },
    { id: 16, name: "The Tower", nameJa: "塔", color: "#A9A9A9" },
    { id: 17, name: "The Star", nameJa: "星", color: "#FFFF00" },
    { id: 18, name: "The Moon", nameJa: "月", color: "#F0E68C" },
    { id: 19, name: "The Sun", nameJa: "太陽", color: "#FFD700" },
    { id: 20, name: "Judgement", nameJa: "審判", color: "#B0C4DE" },
    { id: 21, name: "The World", nameJa: "世界", color: "#32CD32" }
];

export default function handler(request: Request) {
    const { searchParams } = new URL(request.url);
    const cardId = searchParams.get('cardId');
    const card = cards.find(c => c.id === Number(cardId));

    if (!card) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 40,
                        color: 'black',
                        background: 'white',
                        width: '100%',
                        height: '100%',
                        padding: '50px 200px',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    Mystic Tarot
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0f0f1a',
                    backgroundImage: 'radial-gradient(circle at center, #1a1a2e 0%, #000000 100%)',
                    color: '#e0e0e0',
                    fontFamily: '"Zen Kaku Gothic New", sans-serif',
                    border: '20px solid #c9a55c',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #c9a55c',
                        padding: '40px',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <div style={{ fontSize: 40, marginBottom: 20, color: '#c9a55c' }}>今日の運勢</div>
                    <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20, textShadow: '0 0 20px rgba(201, 165, 92, 0.8)' }}>
                        {card.nameJa}
                    </div>
                    <div style={{ fontSize: 40, opacity: 0.8 }}>{card.name}</div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        right: 40,
                        fontSize: 30,
                        color: '#c9a55c',
                    }}
                >
                    Mystic Tarot
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}

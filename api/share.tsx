export const config = {
    runtime: 'edge',
};

// Simplified data for the edge function
const cards = [
    { id: 0, name: "The Fool", nameJa: "愚者", image: "https://tarot-six-sigma.vercel.app/assets/cards/0.png" },
    { id: 1, name: "The Magician", nameJa: "魔術師", image: "https://tarot-six-sigma.vercel.app/assets/cards/1.png" },
    { id: 2, name: "The High Priestess", nameJa: "女教皇", image: "https://tarot-six-sigma.vercel.app/assets/cards/2.png" },
    { id: 3, name: "The Empress", nameJa: "女帝", image: "https://tarot-six-sigma.vercel.app/assets/cards/3.png" },
    { id: 4, name: "The Emperor", nameJa: "皇帝", image: "https://tarot-six-sigma.vercel.app/assets/cards/4.png" },
    { id: 5, name: "The Hierophant", nameJa: "法王", image: "https://tarot-six-sigma.vercel.app/assets/cards/5.png" },
    { id: 6, name: "The Lovers", nameJa: "恋人", image: "https://tarot-six-sigma.vercel.app/assets/cards/6.png" },
    { id: 7, name: "The Chariot", nameJa: "戦車", image: "https://tarot-six-sigma.vercel.app/assets/cards/7.png" },
    { id: 8, name: "Strength", nameJa: "力", image: "https://tarot-six-sigma.vercel.app/assets/cards/8.png" },
    { id: 9, name: "The Hermit", nameJa: "隠者", image: "https://tarot-six-sigma.vercel.app/assets/cards/9.png" },
    { id: 10, name: "Wheel of Fortune", nameJa: "運命の輪", image: "https://tarot-six-sigma.vercel.app/assets/cards/10.png" },
    { id: 11, name: "Justice", nameJa: "正義", image: "https://tarot-six-sigma.vercel.app/assets/cards/11.png" },
    { id: 12, name: "The Hanged Man", nameJa: "吊るされた男", image: "https://tarot-six-sigma.vercel.app/assets/cards/12.png" },
    { id: 13, name: "Death", nameJa: "死神", image: "https://tarot-six-sigma.vercel.app/assets/cards/13.png" },
    { id: 14, name: "Temperance", nameJa: "節制", image: "https://tarot-six-sigma.vercel.app/assets/cards/14.png" },
    { id: 15, name: "The Devil", nameJa: "悪魔", image: "https://tarot-six-sigma.vercel.app/assets/cards/15.png" },
    { id: 16, name: "The Tower", nameJa: "塔", image: "https://tarot-six-sigma.vercel.app/assets/cards/16.png" },
    { id: 17, name: "The Star", nameJa: "星", image: "https://tarot-six-sigma.vercel.app/assets/cards/17.png" },
    { id: 18, name: "The Moon", nameJa: "月", image: "https://tarot-six-sigma.vercel.app/assets/cards/18.png" },
    { id: 19, name: "The Sun", nameJa: "太陽", image: "https://tarot-six-sigma.vercel.app/assets/cards/19.png" },
    { id: 20, name: "Judgement", nameJa: "審判", image: "https://tarot-six-sigma.vercel.app/assets/cards/20.png" },
    { id: 21, name: "The World", nameJa: "世界", image: "https://tarot-six-sigma.vercel.app/assets/cards/21.png" }
];

export default function handler(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const card = cards.find(c => c.id === Number(id));

    const title = card ? `今日の運勢: ${card.nameJa}` : 'Mystic Tarot';
    const description = card ? `${card.nameJa} (${card.name}) のカードが出ました。` : 'タロットで今日の運勢を占いましょう。';
    const imageUrl = card ? card.image : 'https://tarot-six-sigma.vercel.app/og-image.png';

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${imageUrl}">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${description}">
        <meta name="twitter:image" content="${imageUrl}">
        <script>
          window.location.href = '/?result=${id}';
        </script>
      </head>
      <body>
        <p>Redirecting to result...</p>
      </body>
    </html>
  `;

    return new Response(html, {
        headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
}

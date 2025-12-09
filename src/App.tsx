import { useState } from 'react';
import { TarotCard as TarotCardComponent } from './components/TarotCard';
import { DrawButton } from './components/DrawButton';
import { ResultView } from './components/ResultView';
import { LimitMessage } from './components/LimitMessage';
import { useDailyLimit } from './hooks/useDailyLimit';
import { getRandomCard, type TarotCard as TarotCardType } from './data/tarotData';
import './App.css';

function App() {
  const { remaining, isLimitReached, incrementCount } = useDailyLimit();
  const [currentCard, setCurrentCard] = useState<TarotCardType | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDraw = () => {
    if (isLimitReached || remaining <= 0 || isDrawing) return;

    setIsDrawing(true);
    setShowResult(false);
    setIsRevealed(false);
    setCurrentCard(null);

    // Simulate shuffling/drawing delay
    setTimeout(() => {
      const card = getRandomCard();
      setCurrentCard(card);
      incrementCount();

      // Reveal card
      setTimeout(() => {
        setIsRevealed(true);

        // Show result details
        setTimeout(() => {
          setShowResult(true);
          setIsDrawing(false);
        }, 1000);
      }, 500);
    }, 800);
  };

  return (
    <div className="app-container">
      <LimitMessage remaining={remaining} />

      <header className="app-header">
        <h1>Mystic Tarot</h1>
        <p>今日の運勢を占う</p>
      </header>

      <main className="app-main">
        <div className="card-area">
          <TarotCardComponent card={currentCard} isRevealed={isRevealed} />
        </div>

        <div className="controls-area">
          {!showResult && (
            <DrawButton
              onClick={handleDraw}
              disabled={isLimitReached || remaining <= 0 || isDrawing}
            />
          )}
        </div>

        {showResult && currentCard && (
          <div className="result-area fade-in">
            <ResultView card={currentCard} />
            <button
              className="reset-button"
              onClick={() => {
                setShowResult(false);
                setIsRevealed(false);
                setCurrentCard(null);
              }}
            >
              もう一度占う ({remaining}回残り)
            </button>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>引用元: <a href="https://amateras.blog/public-domain-waite-major/" target="_blank" rel="noopener noreferrer">amateras.blog</a></p>
      </footer>
    </div>
  );
}

export default App;

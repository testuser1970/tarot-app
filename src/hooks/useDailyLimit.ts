import { useState, useEffect } from 'react';

const LIMIT_PER_DAY = 3;
const STORAGE_KEY = 'tarot_daily_limit';

interface DailyLimitState {
    date: string;
    count: number;
}

export const useDailyLimit = () => {
    const [count, setCount] = useState<number>(0);
    const [isLimitReached, setIsLimitReached] = useState<boolean>(false);

    useEffect(() => {
        checkLimit();
    }, []);

    const getTodayDate = () => {
        return new Date().toLocaleDateString('ja-JP');
    };

    const checkLimit = () => {
        const today = getTodayDate();
        const storedData = localStorage.getItem(STORAGE_KEY);

        if (storedData) {
            const parsedData: DailyLimitState = JSON.parse(storedData);
            if (parsedData.date === today) {
                setCount(parsedData.count);
                if (parsedData.count >= LIMIT_PER_DAY) {
                    setIsLimitReached(true);
                }
            } else {
                // Reset for new day
                resetLimit(today);
            }
        } else {
            // First time
            resetLimit(today);
        }
    };

    const resetLimit = (date: string) => {
        const newState: DailyLimitState = { date, count: 0 };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
        setCount(0);
        setIsLimitReached(false);
    };

    const incrementCount = () => {
        const today = getTodayDate();
        const newCount = count + 1;
        const newState: DailyLimitState = { date: today, count: newCount };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
        setCount(newCount);

        if (newCount >= LIMIT_PER_DAY) {
            setIsLimitReached(true);
        }
    };

    return {
        count,
        remaining: Math.max(0, LIMIT_PER_DAY - count),
        isLimitReached,
        incrementCount
    };
};

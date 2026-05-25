import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
    const [credits, setCredits] = useState(0);
    const [clickPower, setClickPower] = useState(1);
    const [autoIncome, setAutoIncome] = useState(0);

    const upgrades = [
        { id: 1, name: "Курсор (+1 клік)", cost: 10, effect: () => setClickPower(p => p + 1) },
        { id: 2, name: "Супер курсор (+10 клік)", cost: 100, effect: () => setClickPower(p => p + 10) },
        { id: 3, name: "Автоклікер (+1/сек)", cost: 50, effect: () => setAutoIncome(i => i + 1) },
        { id: 4, name: "Майнер (+10/сек)", cost: 500, effect: () => setAutoIncome(i => i + 10) },
        { id: 5, name: "Ферма (+100/сек)", cost: 5000, effect: () => setAutoIncome(i => i + 100) },
    ];

    useEffect(() => {
        if (autoIncome > 0) {
            const timer = setInterval(() => {
                setCredits(c => c + autoIncome);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [autoIncome]);

    const handleBuy = (upgrade) => {
        if (credits >= upgrade.cost) {
            setCredits(c => c - upgrade.cost);
            upgrade.effect();
        }
    };

    return (
        <div className="app">
            <h1>Clicker Game</h1>
            <div className="stats">
                <h2>Кредити: {credits}</h2>
                <p>Кліків за натискання: {clickPower}</p>
                <p>Автоматичний дохід: {autoIncome}/сек</p>
            </div>
            
            <button className="main-btn" onClick={() => setCredits(c => c + clickPower)}>
                Клік!
            </button>
            
            <div className="upgrades">
                <h3>Покращення</h3>
                {upgrades.map(u => (
                    <button 
                        key={u.id} 
                        onClick={() => handleBuy(u)}
                        disabled={credits < u.cost}
                    >
                        {u.name} (Ціна: {u.cost})
                    </button>
                ))}
            </div>
        </div>
    );
}

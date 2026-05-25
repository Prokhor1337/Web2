import { useState } from "react";

export default function Product({ title, price, img }) {
    const [count, setCount] = useState(0);
    const handleBuy = () => setCount(count + 1);

    return (
        <div className="product">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>Ціна: {price} грн</p>
            <p>Куплено: {count}</p>
            <button onClick={handleBuy}>Купити</button>
        </div>
    );
}

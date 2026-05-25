import Product from "./components/Product/Product";
import { products } from "./products";
import "./App.css";

export default function App() {
    return (
        <div className="app">
            <h1>Магазин</h1>
            <div className="products-list">
                {products.map(p => (
                    <Product key={p.id} {...p} />
                ))}
            </div>
        </div>
    );
}

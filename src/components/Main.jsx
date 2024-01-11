import { ProductCard } from "./ProductCard";

export function Main(){
    return <div className="main_cont">
        <h1>Popular</h1>
        <div className="sort_top">
            <h2>Сортировать по:</h2>
            <h2>Популярности</h2>
            <h2>Рейтингу</h2>
            <h2>Цене</h2>
            <h2>Скидке</h2>
            <h2>Обновлению</h2>
        </div>
        <div className="sort_left">
            <h2>Цена</h2>
            <input type="range" />
            <h2>Размер</h2>
            <h2>Цвет</h2>
        </div>
        <div className="product_list">
            <ProductCard></ProductCard>
        </div>
    </div>
}

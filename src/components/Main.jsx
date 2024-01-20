import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { useGetProductsQuery } from "../store/api";

export function Main() {
  const { data, isLoading, error } = useGetProductsQuery(); //[{}*25]
  return (
    <div className="main_cont">
      <h1>Popular</h1>
      <div className="sort_top">
        <p>Сортировать по: </p>
        <h4>Популярности</h4>
        <h4>Рейтингу</h4>
        <h4>Цене</h4>
        <h4>Скидке</h4>
        <h4>Обновлению</h4>
      </div>
      <div className="main_cont_bot">
        <div className="sort_left">
          <h3>Цена</h3>
          <input type="range" />
          <h3>Размер</h3>
          <h3>Цвет</h3>
        </div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <div className="product_list">
            {data.map((product_card) => {
              return <ProductCard objectData={product_card} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

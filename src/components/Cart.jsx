import { useSelector } from "react-redux";
import { CartCard } from "./CartCard";
export function Cart() {
  const cartState = useSelector((state) => state.cartReducer.cart);

  return (
    <div className="cart_page">
      <h1>Корзина товаров</h1>
      <div className="cart_page_main">
        <div className="cart_table">
          <div className="cart_table_row">
            <div className="cart_table_cell">
              <p>Наименование</p>
            </div>
            <div className="cart_table_cell">
              <p>Количество</p>
            </div>
            <div className="cart_table_cell">
              <p>Цена</p>
            </div>
            <div className="cart_table_cell">
              <p>Стоимость</p>

            </div>
            <div className="cart_table_cell">
                
            </div>
          </div>
          {cartState.map((object) => {
            return <CartCard info={object}></CartCard>;
          })}
          <div className="cart_table_bot">
            <button>Продолжить покупки</button>
            <h2>Итого:</h2>
          </div>
        </div>
        <div className="cart_payment">
          <label htmlFor="">Имя владельца карты</label>
          <input type="text" />
          <label htmlFor="">Номер карты</label>
          <input type="number" />
          <label htmlFor="">Срок действия карты</label>
          <input type="number" />
          <input type="number" />
          <label htmlFor="">CVV</label>
          <input type="number" />
          <button>Подтвердить оплату</button>
        </div>
      </div>
    </div>
  );
}

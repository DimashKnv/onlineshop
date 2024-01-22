import Xpng from "../assets/Vector.png";

export function CartCard(props) {
  console.log(props.info);
  return (
    <div className="cart_table_row">
      <div className="cart_table_cell">
        <img className="cart_card_img" src={props.info.image} alt="" />
        <p>{props.info.title}</p>
      </div>
      <div className="cart_table_cell">
        <p>0shtuk</p>
      </div>
      <div className="cart_table_cell">
        <p>{props.info.price}</p>
      </div>
      <div className="cart_table_cell">
        <p>stoimost'</p>
      </div>

      <img src={Xpng} alt="" />
    </div>
  );
}

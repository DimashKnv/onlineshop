import { useDispatch } from "react-redux";
import LikeImg from "../assets/favorite_border.png";
import BagImg from "../assets/shopping_bag.png";
import StarImg from "../assets/star.png";
import { removeFav } from "../store/reducers";

export function FavoriteCard(props) {
    const dispatch=useDispatch()
  return (

    <div className="favorite_card">
      <img
        className="favCard_img"
        src={props.info.image}
        alt=""
      />
      <div className="card_info">
        <h3>{props.info.title}</h3>
        <p>{props.info.category}</p>
        <div className="product_rating">
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
        </div>
        <div className="favCard_low">
          <h2>{props.info.price} $</h2>
          <div className="card_btn">
            <img src={BagImg} alt="bag" />
            <img src={LikeImg} alt="like" onClick={()=>{dispatch(removeFav(props.info))}} />
          </div>
        </div>
      </div>
    </div>
  );
}

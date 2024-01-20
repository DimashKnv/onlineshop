import { useDispatch, useSelector } from "react-redux";
import LikeImg from "../assets/favorite_border.png";
import BagImg from "../assets/shopping_bag.png";
import StarImg from "../assets/star.png";
import Favorite_filled from "../assets/favorite_filled.png";
import { addFav,removeFav } from "../store/reducers";
import { useState } from "react";
import {addCart,removeCart} from "../store/reducers";

export function ProductCard(props) {
  const dispatch = useDispatch();

  const favState = useSelector((state) => state.favReducer.fav);
  const isInFav=favState.some((e)=>e.id==props.objectData.id)

const cartState=useSelector((state)=>state.cartReducer.cart);



  return (
    <div className="product_card">
      <img src={props.objectData.image} className="product_image" alt="" />
      <div className="product_top">
        <div className="card_info">
          <h2>{props.objectData.price}</h2>
          <p>{props.objectData.title}</p>
        </div>
        <div className="card_btn">
          <img src={BagImg} alt="bag" onClick={()=>{dispatch(addCart(props.objectData))}} />

          <img
            src={isInFav ? Favorite_filled : LikeImg}
            alt="like"
            onClick={() => {
              dispatch(isInFav? removeFav(props.objectData):addFav(props.objectData));
            }}
          />
        </div>
      </div>
      <div className="product_bot">
        <button>About Product</button>
        <div className="product_rating">
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
        </div>
      </div>
    </div>
  );
}

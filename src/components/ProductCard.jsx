import LikeImg from "../assets/favorite_border.png";
import BagImg from "../assets/shopping_bag.png";
import StarImg from "../assets/star.png";


export function ProductCard(props){
    return <div className="product_card">
        <img src={props.objectData.image} className="product_image" alt="" />
        <div className="product_top">
            <div className="card_info">
                <h2>{props.objectData.price}</h2>
                <p>{props.objectData.title}</p>
            </div>
            <div className="card_btn">
                <img src={BagImg} alt="bag" />
                <img src={LikeImg} alt="like" />
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
}
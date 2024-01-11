import LikeImg from "../assets/favorite_border.png";
import BagImg from "../assets/shopping_bag.png";
import StarImg from "../assets/star.png";


export function ProductCard(){
    return <div className="product_card">
        <img src="" alt="" />
        <div className="product_top">
            <div className="card_info">
                <h2>price</h2>
                <p>name</p>
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
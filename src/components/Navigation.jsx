import MenuImg from "../assets/menu.png";
import SearchImg from "../assets/search.png";
import LikeImg from "../assets/favorite_border.png";
import PersonImg from "../assets/person_outline.png";
import BagImg from "../assets/shopping_bag.png";

export function Navigation() {
  return (
    <div className="nav_main">
      <div className="nav_top">
        <img src={MenuImg} alt="vector" />
        <div className="nav_right">
          <div className="search_cont">
            <img src={SearchImg} alt="search" />
            <input type="text" placeholder="Поиск" />
          </div>
          <div className="nav_icon">
          <img src={LikeImg} alt="Like" />
          <img src={PersonImg} alt="Person" />
          <img src={BagImg} alt="Bag" />
          </div>
          
        </div>
      </div>
      <div className="nav_bot">
        <p>Main page/Mens wear</p>
      </div>
    </div>
  );
}

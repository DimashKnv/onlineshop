import { useSelector } from "react-redux";
import { FavoriteCard } from "./FavoriteCard";

export function FavoriteComponent() {
    const FavData=useSelector(state=>state.favReducer)
  
  return (
    <div>
      <h1>Favorite</h1>
      <div className="favCard_list">
   {FavData.fav.map((object)=>{return <FavoriteCard info={object}></FavoriteCard>})}
      </div>
    </div>
  );
}

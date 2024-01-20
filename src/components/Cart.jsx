import { useSelector } from "react-redux";
import { CartCard } from "./CartCard";
export function Cart(){
const cartState=useSelector((state)=>state.cartReducer.cart);
    
    return <div>
        {cartState.map((object)=>{return <CartCard info={object}></CartCard>})}
    </div>
}
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cards/CartItems";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)
    const dispatch = useDispatch();
    const clearCartfunc = ()=>{
        dispatch(clearCart());
    }
    return (
      <div>
        <h1 className="font-bold text-3xl">Cart Items</h1>
        <button
          className="bg-red-400 h-8 w-20 rounded-md"
          onClick={() => {
            clearCartfunc();
          }}
        >
          Clear Cart
        </button>
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
    );
}

export default Cart; 
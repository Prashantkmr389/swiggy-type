import { useDispatch } from "react-redux";
import { IMG_CON_URL } from "../config"
import { removeItem } from "../utils/cartSlice";
const CartItem = ({name, imageId, id})=>{
    const dispatch = useDispatch()
    const handleOnclickRemove = (item) => {
      dispatch(removeItem(item));
    };
    return (
      <div className="m-5 p-2 bg-slate-300 h-40 w-40">
        <img
          className="w-16 h-16"
          src={IMG_CON_URL + imageId}
          alt="Pic broken"
        />
        <h1>{name}</h1>
        <button
          className="p-2 mx-20 bg-red-300 rounded-md"
          onClick={() => {
            handleOnclickRemove(id);
          }}
        >
          {" "}
          Remove
        </button>
      </div>
    );
}

export default CartItem
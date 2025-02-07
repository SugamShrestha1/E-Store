import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Slices/Cartslice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b p-4">
      <span className="text-lg">{item.title} - <strong>${item.price}</strong></span>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

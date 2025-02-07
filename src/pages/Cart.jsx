import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/Slices/Cartslice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-500">Continue shopping</Link></p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <div>
              <Link to="/checkout" className="bg-blue-600 text-white py-2 px-4 rounded mr-4">Proceed to Checkout</Link>
              <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white py-2 px-4 rounded">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

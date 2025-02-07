import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { clearCart } from "../redux/Slices/Cartslice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      alert("Order placed successfully!");
      dispatch(clearCart());
      navigate("/");
    }, 2000);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <a href="/" className="text-blue-500">Continue shopping</a></p>
      ) : (
        <div>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="border-b py-2">{item.title} - ${item.price}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
          <button 
            onClick={handleCheckout} 
            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.user);

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Link to="/" className="text-2xl font-bold">E-Store</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">Cart ({cartItems.length})</Link>
        {user ? (
          <span className="ml-4">Welcome, {user.name}</span>
        ) : (
          <Link to="/login" className="hover:underline">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

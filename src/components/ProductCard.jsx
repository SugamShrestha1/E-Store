import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/Cartslice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button 
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-green-500 text-white py-1 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

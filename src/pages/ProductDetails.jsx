
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/Cartslice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from a mock API or redux
    // For this example, I am using a static product object
    // You can replace this with an API call
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const dispatch = useDispatch();

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full max-w-sm my-4" />
      <p>{product.description}</p>
      <p className="font-semibold text-xl mt-4">${product.price}</p>
      <button 
        onClick={() => dispatch(addToCart(product))}
        className="mt-4 bg-green-500 text-white py-2 px-6 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;

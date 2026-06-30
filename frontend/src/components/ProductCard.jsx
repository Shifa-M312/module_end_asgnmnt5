import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      
      <div className="w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100 relative">
        {product.image && product.image.startsWith('https://') && product.image.includes('.') ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center"
          />
        ) : (
          
          <div className="w-full h-full bg-amber-50 flex flex-col items-center justify-center text-amber-900 p-4 text-center">
            <span className="text-3xl mb-1"></span>
            <span className="font-bold text-sm tracking-wide uppercase">{product.name}</span>
            <span className="text-xs text-amber-700/70 mt-0.5">Image Ready</span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-amber-900">{product.price}</span>
          <button 
            onClick={() => dispatch(addToCart(product))}
            className="bg-amber-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-800 active:scale-95 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

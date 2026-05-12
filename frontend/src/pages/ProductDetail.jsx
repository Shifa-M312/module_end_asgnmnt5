import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import API from '../api/axiosInstance';

const ProductDetail = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        
        API.get(`/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</h2>;
    if (!product) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product not found!</h2>;

    return (
        <div style={{ padding: '40px', display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '400px', borderRadius: '10px' }} />
            <div style={{ maxWidth: '500px' }}>
                <h1>{product.name}</h1>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>${product.price}</p>
                <p>{product.description}</p>
                <button 
                    onClick={() => dispatch(addToCart(product))}
                    style={{ padding: '10px 20px', backgroundColor: '#8B4513', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;

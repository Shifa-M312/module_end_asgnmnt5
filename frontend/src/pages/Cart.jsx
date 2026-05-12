import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

const Cart = () => {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // Calculate total price
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
            <h2>Your Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty. <a href="/">Go shopping!</a></p>
            ) : (
                <>
                    {items.map((item) => (
                        <div key={item._id} style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            borderBottom: '1px solid #ddd', 
                            padding: '10px 0' 
                        }}>
                            <div>
                                <h4>{item.name}</h4>
                                <p>Quantity: {item.quantity} x {item.price}</p>
                            </div>
                            <p style={{ fontWeight: 'bold' }}>{item.price * item.quantity}</p>
                        </div>
                    ))}
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <h3>Total: {totalPrice}</h3>
                        <button 
                            onClick={() => dispatch(clearCart())}
                            style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px', marginRight: '10px' }}
                        >
                            Clear Cart
                        </button>
                        <button 
                            style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}
                            onClick={() => alert("Checkout functionality coming soon!")}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

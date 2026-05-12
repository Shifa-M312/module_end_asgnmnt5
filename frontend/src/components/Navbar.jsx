import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../redux/slices/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    
   
    const { user } = useSelector((state) => state.auth);
    const { totalQuantity } = useSelector((state) => state.cart);

    const handleLogout = () => {
        dispatch(setLogout());
        alert("Logged out!");
    };

    return (
        <nav style={{ 
            padding: '1rem 2rem', 
            backgroundColor: '#333', 
            color: '#fff', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <h2 style={{ margin: 0, color: '#f0ad4e' }}>MERN SHOP</h2>
            
            <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
                
                
                <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>
                    Cart <span style={{ backgroundColor: '#8B4513', padding: '2px 8px', borderRadius: '50%', fontSize: '12px' }}>
                        {totalQuantity}
                    </span>
                </Link>

                
                {!user ? (
                    <>
                        <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
                        <Link to="/register" style={{ 
                            color: '#fff', 
                            textDecoration: 'none', 
                            border: '1px solid #fff', 
                            padding: '5px 10px', 
                            borderRadius: '5px' 
                        }}>Register</Link>
                    </>
                ) : (
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <span style={{ color: '#f0ad4e' }}>Hello, {user.name}</span>
                        <button 
                            onClick={handleLogout} 
                            style={{ 
                                backgroundColor: 'transparent', 
                                border: '1px solid #ff4d4d', 
                                color: '#ff4d4d', 
                                cursor: 'pointer',
                                padding: '4px 10px',
                                borderRadius: '4px'
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

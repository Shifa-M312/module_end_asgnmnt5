import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'; 
import { setLogin } from '../redux/slices/authSlice'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            
           
            dispatch(setLogin({
                user: res.data.user,
                token: res.data.token
            }));

            alert("Login Successful!");
            navigate('/'); 
        } catch (err) {
            alert("Login Failed: " + (err.response?.data?.message || "Server Error"));
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required style={{ padding: '10px' }} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required style={{ padding: '10px' }} />
                <button 
                    type="submit" 
                    style={{ padding: '10px', backgroundColor: '#8B4513', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

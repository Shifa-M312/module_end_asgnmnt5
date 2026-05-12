import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            alert("Registration Successful! Now please login.");
            navigate('/login'); 
        } catch (err) {
            alert("Registration Failed: " + err.response.data.message);
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Create Account</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required style={{ padding: '10px' }} />
                <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required style={{ padding: '10px' }} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required style={{ padding: '10px' }} />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#8B4513', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

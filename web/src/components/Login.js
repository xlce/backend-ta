import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to backend
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });
            // Assuming backend returns a token or session info upon successful login
            // You can store the token in localStorage or sessionStorage for authentication purposes

            // Example: Storing token in localStorage
            localStorage.setItem('token', response.data.token);

            // Navigate to dashboard or any other route after successful login
            navigate('/dashboard');
        } catch (error) {
            // Handle error response
            if (error.response) {
                setMsg(error.response.data.msg);
            } else {
                console.error('Error occurred:', error.message);
                setMsg('Failed to connect to the server.');
            }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={handleSubmit} className="box">
                                {msg && <p className="has-text-centered has-text-danger">{msg}</p>}
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="******"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <button type="submit" className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                            <div>
                                <a href="/register"><button className="button is-fullwidth">Register</button></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

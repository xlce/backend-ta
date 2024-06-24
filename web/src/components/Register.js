import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to backend
            await axios.post('http://localhost:5000/users', {
                name,
                email,
                password,
                confPassword
            });
            // Clear form fields after successful registration
            setName('');
            setEmail('');
            setPassword('');
            setConfPassword('');
            // Navigate to home page or any other route
            navigate('/');
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
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
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
                                    <label className="label">Confirm Password</label>
                                    <div className="control">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="******"
                                            value={confPassword}
                                            onChange={(e) => setConfPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <button type="submit" className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/slices/authSlice';
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported
import { Link } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [ag, setAg] = useState("");
    const [error, setError] = useState(""); // To store validation error messages
    const [loading, setLoading] = useState(false); // To manage loading state
    const dispatch = useDispatch();

    const validateForm = () => {
        if (!email || !password || !name || !ag) {
            setError("All fields are required");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return false;
        }
        setError(""); // Clear any previous errors
        return true;
    };

    const signupHandler = async () => {
        if (validateForm()) {
            setLoading(true); // Start loading
            const newUser = { name, email, password, ag };
            try {
                await dispatch(signup(newUser)); // Dispatch signup action
                setAg("");
                setEmail("");
                setPassword("");
                setName("");
            } catch (error) {
                console.error("Signup failed", error);
                setError("An error occurred. Please try again.");
            } finally {
                setLoading(false); // Stop loading
            }
            console.log(newUser);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="box">
                <h3 className="heading1 mb-4">Sign Up</h3>
                {error && <div className="alert alert-danger">{error}</div>} {/* Error message display */}
                <form>
                    <div className="mb-3">
                        <input
                            value={email}
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={name}
                            type="text"
                            placeholder="Your Name"
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={ag}
                            type="text"
                            placeholder="Your year"
                            onChange={(e) => setAg(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={signupHandler}
                            className="buttonDesign1"
                            disabled={loading} // Disable the button during loading
                        >
                            {loading ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                        <div className="mt-3">
                            <p className="mb-0 text-light">Already have an account?</p>
                            <Link to="/login">
                                <button className="buttonDesign">
                                    Login here
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

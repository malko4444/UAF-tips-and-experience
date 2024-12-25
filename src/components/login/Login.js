import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/slices/authSlice";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Error message state
    const [success, setSuccess] = useState(""); // Success message state
    const [loading, setLoading] = useState(false); // Loading state
    const dispatch = useDispatch();

    // Clear input fields on component mount
    useEffect(() => {
        setEmail("");
        setPassword("");
    }, []);

    const validateForm = () => {
        if (!email || !password) {
            setError("All fields are required.");
            setSuccess(""); // Clear success message
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email.");
            setSuccess(""); // Clear success message
            return false;
        }
        setError(""); // Clear error message if validation is successful
        return true;
    };

    const loginHandler = () => {
        if (validateForm()) {
            setLoading(true); // Start loading
            const existUser = { email, password };
            console.log("Logging in with:", existUser);

            // Dispatch login action
            dispatch(userLogin(existUser))
                .then((response) => {
                    setLoading(false); // Stop loading
                    if (response.payload && response.payload.success) {
                        setSuccess("You successfully logged in!");
                        setError(""); // Clear error message
                    } else {
                        setError("Invalid user! Please signup first.");
                        setSuccess(""); // Clear success message
                    }
                })
                .catch((err) => {
                    setLoading(false); // Stop loading
                    setError("Make sure you are connected to the internet.");
                    setSuccess(""); // Clear success message
                });
        }
    };

    return (
        <div className="login-page d-flex align-items-center justify-content-center min-vh-100">
            <form className="login-container box">
                <div className="login-header mb-4 text-center text-primary">
                    <h3 className="heading1">University Reviews</h3>
                </div>
                {/* Success Message */}
                {success && (
                    <div className="custom-alert custom-alert-success">
                        <i className="bi bi-check-circle-fill"></i> {success}
                    </div>
                )}
                {/* Error Message */}
                {error && (
                    <div className="custom-alert custom-alert-error">
                        <i className="bi bi-exclamation-circle-fill"></i> {error}
                    </div>
                )}
                <div className="mb-3">
                    <input
                        value={email}
                        type="email"
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control inputcolor"
                    />
                </div>
                <div className="mb-3">
                    <input
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control inputcolor"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="button"
                        onClick={loginHandler}
                        className="buttonDesign"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                            "Login"
                        )}
                    </button>
                </div>
                <div className="text-center mt-3">
                    <p className="mb-0 text-light">Don't have an account?</p>
                    <Link to="/signup">
                        <button className="btn btn-link text-light p-0">Signup</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

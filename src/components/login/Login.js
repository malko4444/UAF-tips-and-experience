import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/slices/authSlice";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import './login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Error message state
    const dispatch = useDispatch();

    // Clear input fields on component mount
    useEffect(() => {
        setEmail(""); 
        setPassword("");
    }, []);

    const validateForm = () => {
        if (!email || !password) {
            setError("All fields are required.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email.");
            return false;
        }
        setError(""); // Clear error message if validation is successful
        return true;
    };

    const loginHandler = () => {
        if (validateForm()) {
            const existUser = { email, password };
            console.log("Logging in with:", existUser);

            // Dispatch login action
            dispatch(userLogin(existUser));

            // Clear the input fields after dispatch (Optional)
            setTimeout(function() {
                alert("You successfully login");
            }, 1500); // 3000 milliseconds = 3 seconds
            
        }
    };

    return (
        <div className="login-page d-flex align-items-center justify-content-center min-vh-100 ">
            <form className="login-container  box ">
                <div className="login-header mb-4 text-center text-primary">
                    <h3 className="heading1">University Reviews</h3>
                </div>
                {error && <div className="alert alert-danger mb-3">{error}</div>} {/* Error message display */}
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
                    >
                        Login
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

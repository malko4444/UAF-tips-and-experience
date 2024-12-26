import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'; // Import custom CSS file
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    const currentUser = useSelector((state) => state.authSlice.user);
    const dispatch = useDispatch();

    const logOutHandler = () => {
        console.log("Logout Called");
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark-custom">
            <div className="container-fluid">
                <a className="navbar-brand text-light fw-bold logo" href="#">
                    Welcome {currentUser?.name}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Home Link */}
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        {/* About Us Link */}
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About Us</Link>
                        </li>
                    </ul>
                    {/* Search Bar */}
                    <form className="d-flex mx-auto" role="search">
                        <input
                            className="form-control search-input me-4 inputField"
                            onChange={(e) => props.onSearchHandler(e.target.value)}
                            type="search"
                            placeholder="Search By Name/Year..."
                            aria-label="Search"
                        />
                    </form>
                    {/* Logout Button */}
                    <button
                        className="dark-red-btn"
                        type="button"
                        onClick={logOutHandler}
                    >
                        LogOut
                    </button>
                </div>
            </div>
        </nav>
    );
}

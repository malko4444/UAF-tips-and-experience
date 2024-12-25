import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'; // Import custom CSS file
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

export default function Nav(props) {
    const currentUser = useSelector((state) => state.authSlice.user);
    const dispatch = useDispatch();

    const logOutHandler = ()=>{
        console.log("logout Called");
        dispatch(logout());
        
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark-custom">
            <div className="container-fluid">
                <a className="navbar-brand text-light fw-bold logo" href="#">Welcome {currentUser?.name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex mx-auto" role="search">
                        <input className="form-control search-input me-4 inputField"  onChange={(e)=>   {props.onSearchHandler(e.target.value);}} type="search" placeholder="SearchBy Name/Year..." aria-label="Search" />
                    </form>
                    <button className="dark-red-btn " type="submit" onClick={logOutHandler} >LogOut</button>
                </div>
            </div>
        </nav>
    );
}

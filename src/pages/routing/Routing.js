import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewNotes from '../addNewNotes/AddNewNotes';
import PrivateRoute from "./PrivateRoute";
import Home from '../home/Home';
import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';
import PublicRoute from './PublicRoute';
function Routing() {
    return (
        <Router>
            <Routes>
                
                <Route path="/" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                    } />
                <Route path="/addNewNotes" element={
                    <PrivateRoute>
                    <AddNewNotes />
                </PrivateRoute>} />
                
                <Route path="/login" element={
                    <PublicRoute>
                        <Login/>
                    </PublicRoute>
                    } />
                <Route path="/signup" element={
                    <PublicRoute>
                    <Signup/>
                </PublicRoute>} />

            </Routes>
        </Router>
    );
}

export default Routing;

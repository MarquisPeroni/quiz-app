import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import axios from 'axios';

function App() {
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Aggiungi altre rotte qui */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

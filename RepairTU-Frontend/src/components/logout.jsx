import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        axios.post("http://localhost:3000/api/logout", {}, { timeout: 5000 })
            .then(response => {
                console.log(response.data.message);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                navigate('/');
            }).catch(error => {
                console.log("Logout failed: ", error)
                if (error.code === 'ECONNABORTED') console.warn("Requset timed out.");
            });
    }, [navigate])
};

export default Logout;
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Logout() {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault(); 
        localStorage.removeItem('userToken');
        navigate('/login');
    };

    return (
        <div className="flex flex-row gap-3 px-4 py-3 mt-auto text-white after:bg-[#B04759] hover:bg-[#B04759] rounded-[12px]">
            <img src="icon (6).png" alt="icon" className="w-6 h-6" />
            <button onClick={handleLogout} className="bg-transparent border-none text-white cursor-pointer">
                Logout
            </button>
        </div>
    )
}
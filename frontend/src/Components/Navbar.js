// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ComponentStyles/Navbar.css'

// const Navbar = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleLogout = async () => {
//         try {
//         await fetch('http://localhost:8000/api/auth/logout', {
//             method: 'POST',
//             credentials: 'include'
//         });
//         navigate('/');
//         } catch (err) {
//         console.error("Logout failed:", err);
//         }
//     }
//     return (
//         <div className="profile-container">
//         <div className="profile-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
//             <img src="/profile-icon.png" alt="Profile" className="profile-icon" />
//             <span className="profile-name">{user?.name}</span>
//         </div>

//         {dropdownOpen && (
//             <div className="dropdown-menu">
//             <p onClick={handleLogout}>Logout</p>
//             </div>
//         )}
//         </div>
//     )
// }

// export default Navbar
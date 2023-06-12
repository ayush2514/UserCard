import React from 'react';
import '../styles/Navbar.scss';

const Navbar = ({ handleGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand-name">User Card App</div>
      <button className="get-users-btn" onClick={handleGetUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;

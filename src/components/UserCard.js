import React from 'react';
import '../styles/UserCard.scss';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt="Avatar" />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;

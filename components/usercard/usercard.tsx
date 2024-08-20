import React from 'react';
import "./usercard.css";

interface UserCardProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
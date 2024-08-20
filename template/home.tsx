'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import SearchBar from '../components/searchbar/searchbar';
import UserCard from '../components/usercard/usercard';
import { fetchUsers } from '../utils/api';
import "./home.css";
import SkateBoard from "../assets/Skateboarding.gif";
import Image from 'next/image';
import { toast } from 'react-toastify';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      setLoading(false); 
    }).catch((error) => {
      toast.error('Error fetching users');
    });
  }, []);


  const handleSearch = (query: string) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  return (
    <div className='home'>
      <Head>
        <title>Users List</title>
      </Head>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <div className="loading-container">
          <Image src={SkateBoard} alt="Loading..." className="loading-gif" />
        </div>
      ) : (
        <div className="user-list">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

import React from 'react';
import HomePage from "../../template/home";
import "./pages.css";
import Navbar from '../../components/navbar/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className='main'>
      <Navbar />
      <HomePage />
      <ToastContainer />
    </div>
  );
}
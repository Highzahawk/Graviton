import logo from './logo.svg';
import './App.css';
import {Button, Space, Icon, ConfigProvider, Menu, Layout} from 'antd';
import SignIn from './Components/Auth/SignIn';
import Home from './Pages/Home';
import FileManager from './Pages/FileManager';
import Practice from './Pages/Practice';
import Dashboard from './Pages/Dashboard';
import QuizHome from './Pages/QuizHome';
import FlashcardHome from './Pages/FlashcardHome';
import CreateFlashcard from './Pages/CreateFlashcard';
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import React, { useState } from 'react'

function App() {
  return(
    <>
    <Navbar />
     <div className="container">
      { /*<SignIn /> */ }

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/FileManager" element={<FileManager />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/QuizHome" element={<QuizHome/>} />
          <Route path="/FlashcardHome" element={<FlashcardHome/>} />
          <Route path="/CreateFlashcard" element={<CreateFlashcard/>} />
        </Routes>
    </div>
    </>
  );
} 

export default App;







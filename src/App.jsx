import React from 'react';
import './App.css';
import './Components/Contacts.css'; 
import './Components/ContactUserCard.css';
import './Components/NavBar.css';
import './Components/Post.css';
import './Components/Posts.css';
import './Components/UserProfile.css';
import UserProfile from './Components/UserProfile';
import Contacts from './Components/Contacts';
import Posts from './Components/Posts';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <div className="parent">
        <NavBar />
        <UserProfile />
        <Contacts />
        <Posts />
      </div>
    </>
  );
}

export default App;

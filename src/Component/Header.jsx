import React from "react";
import profilePic from "../assets/image.JPG"; 

function Header() {
  return (
    <header className="header">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div>
        <h1>Laiba Ashfaq</h1>
        <h3>Frontend Developer | Software Engineer</h3>
      </div>
    </header>
  );
}

export default Header;

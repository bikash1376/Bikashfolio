// import React from 'react'
import '../App.css'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile-header">
    <img
      src="https://picsum.photos/600/200"
      alt="Cover image showing a panoramic view of a modern city skyline"
      className="cover-image"
      width="600"
      height="200"
    />
    <div className="profile-content">
      <div className="profile-left">
        <div className="profile-test">
          <img
            src="https://picsum.photos/150"
            alt="Profile picture of Jane Doe, a smiling professional woman with long brown hair"
            className="profile-picture"
            width="150"
            height="150"
          />
          <button className="hire-me-button"><a href="mailto:bikash13763">HIRE ME</a></button>
        </div>
        <div className="socials">
          <h1 className="profile-name">
            Bikash <span className="pronoun">(He,Him)</span>
          </h1>
          <div className="social-icons">
            <a href="mailto:bikash1376"><i className="fa-regular fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/bikash-sahu-2a3371245/" target="_blank"
            ><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.github.com/bikash1376" target="_blank"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
        <p className="profile-bio">
        Full-stack developer | Golang | Problem solver | Crafting dynamic web apps | 
        <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Profile

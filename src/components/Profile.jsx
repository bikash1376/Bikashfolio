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
          <button className="hire-me-button">HIRE ME</button>
        </div>
        <div className="socials">
          <h1 className="profile-name">
            Bikash <span className="pronoun">(He,Him)</span>
          </h1>
          <div className="social-icons">
            <a href="mailto:bikash1376"><i className="fa-regular fa-envelope"></i></a>
            <a href="linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
            <a href="github.com/bikash1376"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
        <a href="x.com/bikash1376" className="x-user"><span className="username">@jane_doe_dev</span></a>
        <p className="profile-bio">
          Full-stack developer | Open source enthusiast | Coffee lover Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          mollitia fuga eveniet, illo fugiat aspernatur fugit ipsam
          temporibus, et ut dolor officia!
        </p>
      </div>
    </div>
  </div>
  )
}

export default Profile

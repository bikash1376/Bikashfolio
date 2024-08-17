import '../App.css'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile-header">
    <img
      src="https://picsum.photos/600/200"
      alt="Cover image"
      className="cover-image"
      width="600"
      height="200"
    />
    <div className="profile-content">
      <div className="profile-left">
        <div className="profile-test">
          <img
            src="https://api.dicebear.com/9.x/notionists/svg?seed=Rocky&backgroundType=gradientLinear&beardProbability=95&body=variant01,variant04,variant05,variant06,variant07,variant08,variant09,variant10,variant11,variant12,variant13,variant14,variant15,variant16,variant17,variant18,variant19,variant20,variant21,variant22,variant23,variant24,variant25,variant02,variant03&bodyIcon=saturn,galaxy,electric&bodyIconProbability=100&backgroundColor=b6e3f4,ffdfbf"
            alt="Avatar"
            className="profile-picture"
            width="200"
            height="200"
          />
          <button className="hire-me-button"><a href="mailto:bikash13763@gmail.com">HIRE ME</a></button>
        </div>
        <div className="socials">
          <h1 className="profile-name">
            Bikash <span className="pronoun">(He,Him)</span>
          </h1>
          <div className="social-icons">
            <a href="mailto:bikash13763@gmail.com"><i className="fa-regular fa-envelope"></i></a>
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

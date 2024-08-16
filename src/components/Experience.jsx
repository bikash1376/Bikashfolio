
import '../App.css'
import { useNavigate } from 'react-router-dom';
import './Experience.css'

const Experience = () => {

  const navigate = useNavigate();

  const handleWorkClick = () => {
    navigate('/work');
  };

  return (
    <div>
    

    <div class="tabs">
          <div class="tab" data-tab="work" onClick={handleWorkClick}>Work/Projects</div>
          <div class="tab active" data-tab="experience">Experience</div>
        </div>
        <div class="tab-content active" id="work-content">


        <section class="experience">
            <h3>Prodigy Infotech</h3>
            <div class="role">Web Developer Intern</div>
             {/* <div class="company">Tech Solutions Inc.</div> */}
            <div class="duration">Jan 2020 - Present</div>
            <p>Developed and maintained web applications using JavaScript, React, and Node.js. Led a team of developers to deliver high-quality software on time.</p>
            <div class="tags">
                <div class="tag">JavaScript</div>
                <div class="tag">React</div>
                <div class="tag">Node.js</div>
                <div class="tag">Leadership</div>
            </div>
        </section>

        <section class="experience">
            <h3>DevZone Tech</h3>
            <div class="role">Junior Developer</div>
           {/* <div class="company">Creative Agency</div> */}
            <div class="duration">Jun 2017 - Dec 2019</div>
            <p>Created responsive websites and improved user experience through interactive UI elements. Worked closely with designers and backend developers.</p>
            <div class="tags">
                <div class="tag">HTML</div>
                <div class="tag">CSS</div>
                <div class="tag">JavaScript</div>
                <div class="tag">UI/UX</div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default Experience

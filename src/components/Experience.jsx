
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
            <div class="duration">Jan 2024 - March 2024</div>
            <p>Contributed extensively to the development of a portfolio website during my internship, using ReactJS</p>
            <p>Successfully completed all tasks assigned by the organization</p>
            <div class="tags">
                <div class="tag">JavaScript</div>
                <div class="tag">React</div>
                <div class="tag">Node.js</div>
                <div class="tag">Communication</div>
            </div>
        </section>

        <section class="experience">
            <h3>DevZone Tech</h3>
            <div class="role">Junior Developer</div>
            <div class="duration">Jun 2023 - Aug 2023</div>
            <p>Accomplished the successful delivery of a full-stack web development project within a two-month timeframe</p>
            <p>Played a vital role in a collaborative team effort, consistently meeting deadlines and received commendable
            feedback from clients.</p>
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

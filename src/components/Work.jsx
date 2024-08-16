// import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import './Work.css'

const Work = () => {


  const navigate = useNavigate();

  const handleExperienceClick = () => {
    navigate('/experience');
  };


  return (
    <>
   
    <div class="projects">
    <div class="tabs">
        <div class="tab active" data-tab="work">Work/Projects</div>
        <div class="tab" data-tab="experience" onClick={handleExperienceClick}>Experience</div>
      </div>
      <div class="tab-content active" id="work-content">


    <div class="project-card">
      <div class="project-header">
        <img src="https://th.bing.com/th/id/OIP.PBKDcYxc9Z7fvKOXlBn5bgAAAA?rs=1&pid=ImgDetMain" alt="Spotlistify Icon" />
        <div>
          <h3>Spotlistify <span class="status building">Building</span></h3>
          <p>A directory of Spotify playlists</p>
        </div>
      </div>
      <div class="tags">
        <span>Next JS</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>ShadCn</span>
        <span>Tanstack Query</span>
        <span>PostgreSQL</span>
        <span>Prisma</span>
        <span>NextAuth</span>
      </div>
      <div class="project-links">
        <a href="#" class="project-link"><i class="fa-solid fa-link"></i></a>
        <a href="#" class="project-copy"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <img src="https://th.bing.com/th/id/OIP.ATQOkq8aaXwqNQgBPM1N8AHaHa?rs=1&pid=ImgDetMain" alt="Silly Questions Icon" />
        <div>
          <h3>
            Silly Questions <span class="status running">Running</span>
          </h3>
          <p>
            Generate 100% engagement guaranteed questions to get more
            engagements...
          </p>
        </div>
      </div>
      <div class="tags">
        <span>Next JS</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>Mistral AI</span>
        <span>ShadCn</span>
      </div>
      <div class="project-links">
        <a href="#" class="project-link"><i class="fa-solid fa-link"></i></a>
        <a href="#" class="project-copy"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <img src="https://th.bing.com/th/id/R.e52bd428d0e821fed4d58ab6988d44c8?rik=93pJt4Ys7Aw7bg&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f08%2frandom_logo_1.png&ehk=4Su0HMlE75LqSpA67oF3OzYp%2bdhGI8eAsSe%2bCC9Qy1E%3d&risl=&pid=ImgRaw&r=0" alt="27Startups Icon" />
        <div>
          <h3>27Startups <span class="status running">Running</span></h3>
          <p>Inspired by Marc Louvion's 50 Hacks platform...</p>
        </div>
      </div>
      <div class="tags">
        <span>React JS</span>
        <span>JavaScript</span>
        <span>Tailwind</span>
        <span>Supabase</span>
        <span>Tanstack Query</span>
      </div>
      <div class="project-links">
        <a href="#" class="project-link"><i class="fa-solid fa-link"></i></a>
        <a href="#" class="project-copy"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Work

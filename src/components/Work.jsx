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
        <img src="https://th.bing.com/th/id/OIG4.sa0Pl9vIWWDyXEWhFokK?pid=ImgGn" alt='CafeControl Icon' />
        <div>
          <h3>CafeControl 
            <span class="status running">Running</span>
          </h3>
          <p>A comprehensive web application designed to streamline cafe operations</p>
        </div>
      </div>
      <div class="tags">
        <span>React JS</span>
        <span>Tailwind</span>
        <span>MongoDB</span>
        <span>Node JS</span>
        <span>Express</span>
      </div>
      <div class="project-links">
        <a href="https://www.github.com/bikash1376/CafeControl" target='_blank' class="project-link"><i class="fa-solid fa-link"></i></a>
        <a href="https://www.github.com/bikash1376/CafeControl" target='_blank' class="project-copy"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <img src="https://th.bing.com/th/id/OIP.ATQOkq8aaXwqNQgBPM1N8AHaHa?rs=1&pid=ImgDetMain" alt="Recipe App Icon" />
        <div>
          <h3>
            Recipe App <span class="status running">Running</span>
          </h3>
          <p>
            List of Recipes with feature to favourite them 
          </p>
        </div>
      </div>
      <div class="tags">
        <span>React Js</span>
        <span>Tailwind CSS</span>
        <span>Edamam API</span>
        <span>Axios</span>
      </div>
      <div class="project-links">
        <a href="https://recipe-app-bs.vercel.app/" target='_blank' class="project-link"><i class="fa-solid fa-link"></i></a>
        <a href="https://www.github.com/bikash1376/Recipe-app" target='_blank' class="project-copy"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <img src="https://th.bing.com/th/id/OIG2._V6pPj3y9Vnwp8uY.mvU?pid=ImgGn" alt="21Startups Icon" />
        <div>
          <h3>21Startups <span class="status building">Building</span></h3>
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
        <a href="https://www.github.com/bikash1376?tab=repositories" target='_blank' class="project-link"><i class="fa-solid fa-link"></i></a>
        <a href="https://www.github.com/bikash1376" target='_blank' class="project-copy"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Work

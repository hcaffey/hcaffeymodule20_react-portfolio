import React from "react";
import '../../App.css';

//reusing some bio infrastructure for time 
const Projects = () => {
  return (
    <div className="projects-container">
      <div className= "bio-section">
        <div className="bio-header">
            <p className="bio-text">My Projects</p>
            <p>
              Bootcamp Projects:
            </p>
                <ul>
                    <li>
                        <a href="https://brandon5667.github.io/peak-fitness/">Peak Fitness</a>
                    </li>
                    <li>
                        <a href="https://cash4cache.herokuapp.com/">Cash4Cache</a>
                    </li>
                    <li>
                        <a href="https://inkedin-ef5cc989f602.herokuapp.com/">InkedIn</a>
                    </li>
                </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
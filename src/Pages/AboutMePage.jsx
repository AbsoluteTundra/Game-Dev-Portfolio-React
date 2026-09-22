import React, { Component } from 'react';
import "../Styles/Pages/AboutMePageStyle.css"

class AboutMePage extends Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>

        <div className='ExperienceBlock'>
          <img src="me.jpg"></img>
          <div>
            <h1>Michel van der Linden</h1>
            <p>I am a dynamic and skilled Unity Software Developer with over 5 years of professional experience, including 3 years of dedicated work in a company utilizing Unity. My passion for game development is reflected in my extensive experience with Unity and Unreal Engine 4. I thrive on collaborating with game designers to create engaging and immersive gaming experiences. With a solid background in both the technical and creative aspects of game development, I excel at bringing innovative game concepts to life, ensuring they are both fun and captivating for players.</p>
          </div>
        </div>

        <h1>Jobs</h1>

        <div className='ExperienceBlock'>
          <img src="bluetea_logo.jpg"></img>
          <div>
            <h1>Unity Software-Engineer 2021 - Current</h1>
            <p>At BlueTea, I create and enhance training simulations using Unity and C#. I work closely with a team of programmers and instructional designers, leveraging our in-house tool, VirtualStudio. My key responsibilities include developing new features, improving existing ones, and ensuring our tools meet the needs of instructional designers for creating effective training scenarios.</p>
          </div>
        </div>

        <h1>Education</h1>
        <div className='ExperienceBlock'>
          <img src="buas_logo.png"></img>
          <div>
            <h1>Bachelor of Applied Science - BASc - HBO Bachelor Creative Media and Game Technologies</h1>
            <p>Developed multiple projects, including launching two games on Steam (Muscle Magic and To The Core).
              Gained expertise in developing core gameplay mechanics, UI/UX elements, integrating animations, and improving AI systems.
              Worked closely with diverse teams, enhancing teamwork, project management, and communication skills.</p>
          </div>
        </div>

        <div className='ExperienceBlock'>
          <img src="sint_lucas_logo.png"></img>
          <div>
            <h1>MBO Applicatie - en mediaontwikkeling (Gamedeveloper)</h1>
            <p>Gained expertise in Unity, developing multiple projects, and proficiency in C# and JavaScript (Unity Engine).
              Worked within diverse teams to design, develop, and deploy engaging games, enhancing teamwork and project management skills.
              Improved problem-solving skills through debugging, optimization, and creative solutions.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMePage;
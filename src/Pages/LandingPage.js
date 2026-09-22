import React, { Component } from 'react';
import { ProjectsData } from "../ProjectsData"
import ProjectGalleryElement from '../Components/ProjectGalleryElement'
import "../Styles/Pages/LandingPageStyle.css"

class LandingPage extends Component {
    render() {
        return (
                <div id="about-me" className="ProjectGalleryContainer">
                    <div className="ProjectGalleryHeader">
                        <h1 >Welcome to My Portfolio</h1>
                        <div className='AboutMeBlock'>
                            <img src="me.jpg"></img>
                            <div>
                                <p>I'm Michel van der Linden, a dynamic and skilled Unity Software Developer with over 5 years of professional experience, including 3 years of dedicated work in a company utilizing Unity. My passion for game development is reflected in my extensive experience with Unity and Unreal Engine 4. I thrive on collaborating with game designers to create engaging and immersive gaming experiences. With a solid background in both the technical and creative aspects of game development, I excel at bringing innovative game concepts to life, ensuring they are both fun and captivating for players.</p>
                            </div>
                        </div>
                    </div>
                    <h1 id="projects">Projects</h1>
                    <div className="ProjectItemsContainer">
                        {ProjectsData.map((projectInfo) => (<ProjectGalleryElement projectInfo={projectInfo} />))}
                    </div>
                </div>
        );
    }
}

export default LandingPage;